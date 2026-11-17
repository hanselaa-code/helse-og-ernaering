declare global {
  interface Window {
    __HELSE_IMGS__?: Record<string, string>;
  }
}

export function getHealthImage(filename: string): string {
  if (typeof window !== 'undefined' && window.__HELSE_IMGS__?.[filename]) {
    return window.__HELSE_IMGS__[filename];
  }
  return `./images/helse/${filename}`;
}
