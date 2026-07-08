import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo/logo-dark.png" alt="Maverick UcM Institute" className="h-11 w-auto sm:h-12" />
        </Link>

        <a
          href="https://play.google.com/store/apps/details?id=co.diy.osbwj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg px-3 py-2 sm:px-5 sm:py-2.5 font-body text-xs sm:text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 bg-primary-gradient shadow-glow-sm hover:shadow-glow hover:scale-105"
        >
          <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Download App</span>
          <span className="sm:hidden">Get App</span>
        </a>
      </div>
    </header>
  );
}
