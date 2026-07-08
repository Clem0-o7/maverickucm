import { Smartphone, BookOpen, GraduationCap, FileText, Users } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=co.diy.osbwj';

// Floating icon component for the decorative orbit
function FloatingIcon({ icon: Icon, className, delay = '0s' }) {
  return (
    <div
      className={`absolute hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-paper shadow-card border border-line ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="w-5 h-5 text-red" strokeWidth={1.75} />
    </div>
  );
}

export default function DownloadApp() {
  return (
    <section id="download-app" className="relative overflow-hidden border-b border-line bg-paper-dim">
      {/* Dashed orbit ring (decorative) — uses brand slate */}
      <div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block w-[480px] h-[480px] rounded-full border-2 border-dashed border-line pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle corner accent — matches the hero offset-box motif */}
      <div
        className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-red-light/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text + Badges */}
          <div className="relative z-10">
            <span className="roll-code text-red">Mobile App</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl leading-tight">
              Download <span className="text-red">App</span>
            </h2>
            <p className="mt-4 max-w-md text-base text-ink-soft leading-relaxed">
              Get the Maverick UcM app to access downloaded lectures anytime,
              anywhere and learn at your convenience.
            </p>

            {/* Store Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Google Play Badge */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="google-play-badge"
                className="group inline-flex items-center gap-3 rounded-md border-2 border-ink bg-ink px-5 py-3 shadow-stamp transition-all duration-300 hover:bg-ink-soft hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.005 1.005 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.334 8.635-8.636zm3.199-3.199l2.302 2.302-2.302 2.302-2.679-2.302 2.679-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-cream/70">
                    Android app on
                  </span>
                  <span className="block text-lg font-bold text-paper leading-tight -mt-0.5 font-display">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store Badge */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="app-store-badge"
                className="group inline-flex items-center gap-3 rounded-md border-2 border-ink bg-ink px-5 py-3 shadow-stamp transition-all duration-300 hover:bg-ink-soft hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-cream/70">
                    Download on the
                  </span>
                  <span className="block text-lg font-bold text-paper leading-tight -mt-0.5 font-display">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Phone Mockups + Floating Icons */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Floating decorative icons */}
            <FloatingIcon icon={BookOpen} className="download-float top-4 right-8" delay="0s" />
            <FloatingIcon icon={GraduationCap} className="download-float top-12 left-4" delay="0.5s" />
            <FloatingIcon icon={Smartphone} className="download-float bottom-16 left-0" delay="1s" />
            <FloatingIcon icon={FileText} className="download-float bottom-4 right-4" delay="1.5s" />
            <FloatingIcon icon={Users} className="download-float top-1/2 right-0 translate-x-4" delay="2s" />

            {/* Phone mockup image */}
            <img
              src="/app-mockup.png"
              alt="Maverick UcM mobile app screenshots showing course browsing and lecture downloads"
              className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-2xl mix-blend-multiply"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
