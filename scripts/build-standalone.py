#!/usr/bin/env python3
"""
Bundles the Vite production build (dist/) and all Nano Banana illustrations
into a single zero-dependency, CSP-safe HTML file.
"""
import base64
import glob
import io
import json
import os
import re

try:
    from PIL import Image
except ImportError:
    Image = None

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
IMG_DIR = os.path.join(ROOT, "public", "images", "helse")
OUT_DIST_HTML = os.path.join(DIST, "Helse-og-Ernaering-Presentasjon.html")


def encode_image_data_uri(img_path: str) -> str:
    if Image is not None:
        with Image.open(img_path) as im:
            has_alpha = im.mode in ("RGBA", "LA")
            converted = im.convert("RGBA" if has_alpha else "RGB")
            max_dim = max(converted.width, converted.height)
            if max_dim > 1280:
                scale = 1280.0 / max_dim
                new_size = (
                    max(1, round(converted.width * scale)),
                    max(1, round(converted.height * scale)),
                )
                converted = converted.resize(new_size, Image.Resampling.LANCZOS)
            buf = io.BytesIO()
            converted.save(buf, format="WEBP", quality=78, method=6)
            b64 = base64.b64encode(buf.getvalue()).decode("ascii")
            return f"data:image/webp;base64,{b64}"

    ext = os.path.splitext(img_path)[1].lower()
    mime = "image/png" if ext == ".png" else "image/jpeg"
    b64 = base64.b64encode(open(img_path, "rb").read()).decode("ascii")
    return f"data:{mime};base64,{b64}"


def main() -> None:
    css_files = sorted(glob.glob(os.path.join(DIST, "assets", "*.css")))
    js_files = sorted(glob.glob(os.path.join(DIST, "assets", "*.js")))
    if not css_files or not js_files:
        raise RuntimeError("Run `vite build` before building standalone HTML.")

    css_content = "\n".join(open(f, encoding="utf-8").read() for f in css_files)
    js_content = "\n".join(open(f, encoding="utf-8").read() for f in js_files)

    img_map = {}
    for pattern in ("*.jpg", "*.png", "*.webp"):
        for img_file in sorted(glob.glob(os.path.join(IMG_DIR, pattern))):
            fname = os.path.basename(img_file)
            img_map[fname] = encode_image_data_uri(img_file)

    img_json = json.dumps(img_map, separators=(",", ":"))
    safe_js = re.sub(r"</script", r"<\\/script", js_content, flags=re.IGNORECASE)

    favicon_svg_path = os.path.join(ROOT, "public", "favicon.svg")
    favicon_b64 = base64.b64encode(open(favicon_svg_path, "rb").read()).decode("ascii")

    html = f"""<!doctype html>
<html lang="nb" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,{favicon_b64}" />
    <meta
      name="description"
      content="Helse og ernæring – Interaktiv klasseromspresentasjon for Vg1 naturfag."
    />
    <title>Helse og ernæring | Interaktiv Klasseromspresentasjon</title>
    <style>
{css_content}
    </style>
  </head>
  <body class="bg-[#07111A] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
    <div id="root"></div>
    <script>window.__HELSE_IMGS__ = {img_json};</script>
    <script type="module">
{safe_js}
    </script>
  </body>
</html>
"""

    with open(OUT_DIST_HTML, "w", encoding="utf-8") as f:
        f.write(html)

    size_mb = os.path.getsize(OUT_DIST_HTML) / (1024 * 1024)
    print(f"Built {OUT_DIST_HTML} ({size_mb:.2f} MB, {len(img_map)} embedded images)")


if __name__ == "__main__":
    main()
