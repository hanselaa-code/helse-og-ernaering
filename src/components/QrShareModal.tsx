import { Check, Copy, QrCode, X } from 'lucide-react';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import type { AppView, ThemeConfig } from '../data/types';

const CANONICAL_FALLBACK_URL =
  'https://hanselaa-code.github.io/helse-og-ernaering/';

interface QrShareModalProps {
  activeView: AppView;
  activeTheme: ThemeConfig;
  isOpen: boolean;
  onClose: () => void;
}

function buildShareUrl(activeView: AppView, activeTheme: ThemeConfig): string {
  const isPublicWeb =
    typeof window !== 'undefined' &&
    (window.location.protocol === 'http:' ||
      window.location.protocol === 'https:') &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1' &&
    window.location.hostname !== '[::1]' &&
    window.location.hostname !== '::1';

  const baseUrl = isPublicWeb
    ? `${window.location.origin}${window.location.pathname}`
    : CANONICAL_FALLBACK_URL;
  const targetHash = activeView === 'oversikt' ? '' : activeTheme.hash;

  return `${baseUrl}${targetHash}`;
}

export function QrShareModal({
  activeView,
  activeTheme,
  isOpen,
  onClose,
}: QrShareModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const isOverview = activeView === 'oversikt';
  const shareUrl = buildShareUrl(activeView, activeTheme);
  const pageBadge = isOverview ? 'Temastartside' : 'Undertema';
  const pageTitle = isOverview
    ? 'Helse og ernæring – Oversikt'
    : activeTheme.title;

  useEffect(() => {
    if (!isOpen || !shareUrl) return;
    let cancelled = false;
    QRCode.toDataURL(shareUrl, {
      width: 280,
      margin: 2,
      color: {
        dark: '#07111A',
        light: '#F8FAFC',
      },
    })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl('');
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, shareUrl]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard failures in restricted frames
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl glass-panel p-6 space-y-5 animate-card-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/35 text-emerald-300">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white font-display">
                Del med klassen
              </h2>
              <p className="text-xs text-slate-400">
                Skann QR-koden på mobil eller PC
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 px-3.5 py-2.5 space-y-1">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
              isOverview
                ? 'bg-emerald-500/15 border-emerald-400/35 text-emerald-300'
                : 'bg-sky-500/15 border-sky-400/35 text-sky-300'
            }`}
          >
            {pageBadge}
          </span>
          <p className="text-sm font-bold text-slate-100 leading-snug">
            {pageTitle}
          </p>
        </div>

        <div className="flex justify-center">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt={`QR-kode til ${pageTitle}`}
              className="w-56 h-56 rounded-2xl border-4 border-white shadow-xl"
            />
          ) : (
            <div className="w-56 h-56 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xs text-slate-400">
              Genererer QR-kode...
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={shareUrl}
            aria-label="Delingslenke"
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-300 font-mono-time truncate"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-xs font-bold text-emerald-200 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Kopiert</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Kopier</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
