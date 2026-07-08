import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper flex items-center min-h-[90vh]">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 mix-blend-screen animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(225,29,72,1) 0%, rgba(0,0,0,0) 70%)' }}
        />
        <div 
          className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-15 mix-blend-screen animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, rgba(254,148,0,1) 0%, rgba(0,0,0,0) 70%)' }}
        />
      </div>
      
      <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="roll-code text-red border border-red/20 bg-red/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
          Class 10 CBSE Board Coaching
        </span>
        <h1 className="mt-8 font-display text-5xl font-black leading-[1.1] text-ink sm:text-7xl lg:text-8xl tracking-tightest">
          Board exams aren&apos;t a gamble. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-primary-gradient">
            They&apos;re a Maverick&apos;s game.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-ink-soft font-medium leading-relaxed">
          Weekly chapter tests, doubt-solving that doesn&apos;t make you wait, and mentors who
          track your progress like it&apos;s their own report card.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://play.google.com/store/apps/details?id=co.diy.osbwj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 rounded-xl px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 bg-primary-gradient shadow-glow hover:shadow-[0_0_40px_-10px_rgba(225,29,72,0.6)] hover:scale-105"
          >
            Get the App
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#courses"
            className="inline-flex justify-center items-center gap-2 rounded-xl px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white"
          >
            Explore Class 10 Batch
          </a>
        </div>
      </div>
    </section>
  );
}
