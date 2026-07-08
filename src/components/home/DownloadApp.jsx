const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=co.diy.osbwj';

export default function DownloadApp() {
  return (
    <section id="download-app" className="relative overflow-hidden border-b border-line bg-surface-dim">

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
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md px-6 py-3 shadow-card transition-all duration-300 hover:bg-black hover:shadow-glow-sm hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.005 1.005 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.334 8.635-8.636zm3.199-3.199l2.302 2.302-2.302 2.302-2.679-2.302 2.679-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-ink-soft">
                    Android app on
                  </span>
                  <span className="block text-lg font-bold text-ink leading-tight -mt-0.5 font-display">
                    Google Play
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Phone mockup image */}
            <img
              src="/app-mockup.png"
              alt="Maverick UcM mobile app screenshots showing course browsing and lecture downloads"
              className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-2xl mix-blend-lighten"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
