import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../../data/contact';
import logo from '../../assets/logo.png';

export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual API/email call
    setSent(true);
  };

  return (
    <footer className="grain border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Logo, info, contact details */}
          <div>
            <img src={logo} alt="Maverick UcM Institute" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm text-paper/70">
              Board-exam coaching for Class 10 &amp; 12 — built around results, not rote.
            </p>

            <div className="mt-6 space-y-3 text-sm text-paper/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-red" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-paper">
                  {contactInfo.phone}
                  {contactInfo.phoneHours && (
                    <span className="ml-1 text-paper/50">({contactInfo.phoneHours})</span>
                  )}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-red" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-paper">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {contactInfo.instagram && (
                <a href={contactInfo.instagram} aria-label="Instagram" className="text-paper/70 hover:text-red">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {contactInfo.youtube && (
                <a href={contactInfo.youtube} aria-label="YouTube" className="text-paper/70 hover:text-red">
                  <Youtube className="h-5 w-5" />
                </a>
              )}
              {contactInfo.facebook && (
                <a href={contactInfo.facebook} aria-label="Facebook" className="text-paper/70 hover:text-red">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right: Contact form */}
          <div id="contact">
            <h4 className="roll-code text-cream/80">Get in touch</h4>
            <p className="mt-2 text-sm text-paper/60">
              Questions before you enroll? Drop us a message.
            </p>

            {sent ? (
              <div className="mt-6 rounded-md border border-red/30 bg-red/10 p-6 text-center">
                <p className="font-display text-xl font-bold text-paper">Message sent.</p>
                <p className="mt-2 text-sm text-paper/70">
                  A mentor will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-paper/50" htmlFor="footer-name">
                      Name
                    </label>
                    <input
                      id="footer-name"
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-sm border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/30 focus:border-red"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-paper/50" htmlFor="footer-phone">
                      Phone
                    </label>
                    <input
                      id="footer-phone"
                      required
                      type="tel"
                      className="mt-1.5 w-full rounded-sm border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/30 focus:border-red"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-paper/50" htmlFor="footer-subject">
                    Subject
                  </label>
                  <input
                    id="footer-subject"
                    type="text"
                    className="mt-1.5 w-full rounded-sm border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/30 focus:border-red"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-paper/50" htmlFor="footer-message">
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    rows={3}
                    className="mt-1.5 w-full rounded-sm border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/30 focus:border-red"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Maverick UcM Institute. All rights reserved.</p>
          <p className="roll-code">MUI / EST. 2017</p>
        </div>
      </div>
    </footer>
  );
}
