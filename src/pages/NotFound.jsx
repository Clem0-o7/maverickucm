import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="roll-code text-red">Error 404</span>
      <h1 className="mt-3 font-display text-5xl font-black text-ink">Page not on the syllabus.</h1>
      <p className="mt-3 text-ink-faint">The page you're looking for doesn't exist, or moved.</p>
      <Button to="/" variant="dark" className="mt-6">
        Back to home
      </Button>
    </section>
  );
}
