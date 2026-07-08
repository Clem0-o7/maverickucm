import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — replace this with your API/email call.
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <span className="roll-code text-red">Get in touch</span>
      <h1 className="mt-3 max-w-xl font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Questions before you enroll? Ask a mentor directly.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red" />
              <div>
                <p className="font-semibold text-ink">Visit us</p>
                <p className="text-sm text-ink-faint">
                  4th Floor, Ashford Tower, Anna Salai, Chennai, Tamil Nadu 600002
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-red" />
              <div>
                <p className="font-semibold text-ink">Call us</p>
                <p className="text-sm text-ink-faint">+91 98765 43210 (Mon–Sat, 9am–7pm)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-red" />
              <div>
                <p className="font-semibold text-ink">Email us</p>
                <p className="text-sm text-ink-faint">hello@maverickucm.in</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="rounded-md border border-red/30 bg-red-light p-8 text-center">
              <p className="font-display text-2xl font-bold text-red-dark">Message sent.</p>
              <p className="mt-2 text-sm text-red-dark/80">
                A mentor will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-red"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-red"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="grade">
                  Interested in
                </label>
                <select
                  id="grade"
                  className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-red"
                >
                  <option>Class 10</option>
                  <option>Class 12 — Science (PCM)</option>
                  <option>Class 12 — Science (PCB)</option>
                  <option>Class 12 — Commerce</option>
                  <option>Class 12 — Humanities</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-red"
                  placeholder="What would you like to know?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-red-dark"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
