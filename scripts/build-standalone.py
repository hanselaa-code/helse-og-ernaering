#!/usr/bin/env python3
"""
Bundles the Vite production build (dist/) into a single zero-dependency,
CSP-safe HTML file that runs anywhere (Artifact Preview, file://, Google Drive).
"""
import base64
import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
OUT_DIST_HTML = os.path.join(DIST, "Helse-og-Ernaering-Presentasjon.html")


def main() -> None:
    css_files = sorted(glob.glob(os.path.join(DIST, "assets", "*.css")))
    js_files = sorted(glob.glob(os.path.join(DIST, "assets", "*.js")))
    if not css_files or not js_files:
        raise RuntimeError("Run `vite build` before building standalone HTML.")

    css_content = "\n".join(open(f, encoding="utf-8").read() for f in css_files)
    js_content = "\n".join(open(f, encoding="utf-8").read() for f in js_files)
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
    <script type="module">
{safe_js}
    </script>
  </body>
</html>
"""

    with open(OUT_DIST_HTML, "w", encoding="utf-8") as f:
        f.write(html)

    size_mb = os.path.getsize(OUT_DIST_HTML) / (1024 * 1024)
    print(f"Built {OUT_DIST_HTML} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    main()
