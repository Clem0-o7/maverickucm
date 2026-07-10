import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../../data/contact';

export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('footer-name').value;
    const subject = document.getElementById('footer-subject').value;
    const message = document.getElementById('footer-message').value;
    
    // Extract numbers only from the contact phone
    const waNumber = contactInfo.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`Hi, I'm ${name}.\n\nSubject: ${subject}\n\n${message}`);
    
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="grain border-t border-line bg-paper-dim text-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Logo, info, contact details */}
          <div>
            <img src="/logo/logo-dark.png" alt="Maverick UcM Institute" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Learn Beyond Books. Master Beyond Limits
            </p>

            <div className="mt-6 space-y-3 text-sm text-ink-soft">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-red" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-ink">
                  {contactInfo.phone}
                  {contactInfo.phoneHours && (
                    <span className="ml-1 text-ink-faint">({contactInfo.phoneHours})</span>
                  )}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-red" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ink">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {/* {contactInfo.instagram && (
                <a href={contactInfo.instagram} aria-label="Instagram" className="text-ink-soft hover:text-red">
                  <Instagram className="h-5 w-5" />
                </a>
              )} */}
              {contactInfo.youtube && (
                <a href={contactInfo.youtube} aria-label="YouTube" className="text-ink-soft hover:text-red">
                  <Youtube className="h-5 w-5" />
                </a>
              )}
              {/* {contactInfo.facebook && (
                <a href={contactInfo.facebook} aria-label="Facebook" className="text-ink-soft hover:text-red">
                  <Facebook className="h-5 w-5" />
                </a>
              )} */}
            </div>
          </div>

          {/* Right: Contact form */}
          <div id="contact">
            <h4 className="roll-code text-ink-soft">Get in touch</h4>
            <p className="mt-2 text-sm text-ink-faint">
              Questions before you enroll? Drop us a message.
            </p>

            {sent ? (
              <div className="mt-6 rounded-md border border-red/30 bg-red/10 p-6 text-center">
                <p className="font-display text-xl font-bold text-ink">Message sent.</p>
                <p className="mt-2 text-sm text-ink-soft">
                  A mentor will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="footer-name">
                      Name
                    </label>
                    <input
                      id="footer-name"
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-red"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="footer-phone">
                      Phone
                    </label>
                    <input
                      id="footer-phone"
                      required
                      type="tel"
                      className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-red"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="footer-subject">
                    Subject
                  </label>
                  <input
                    id="footer-subject"
                    type="text"
                    className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-red"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink-faint" htmlFor="footer-message">
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    rows={3}
                    className="mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-red"
                    placeholder="What would you like to know?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-2 rounded-lg bg-primary-gradient px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all shadow-glow-sm hover:shadow-glow hover:scale-105 w-full sm:w-auto"
                >
                  Send via WhatsApp
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Maverick UcM Institute. All rights reserved.</p>
          {/* <p className="roll-code">MUI / EST. 2017</p> */}
        </div>
      </div>
    </footer>
  );
}
