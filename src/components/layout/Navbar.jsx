import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Maverick UcM Institute" className="h-11 w-auto sm:h-12" />
        </Link>

        <a
          href="https://play.google.com/store/apps/details?id=co.diy.osbwj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-red-dark"
        >
          <Download className="h-4 w-4" />
          Download App
        </a>
      </div>
    </header>
  );
}
