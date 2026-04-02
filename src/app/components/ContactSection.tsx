import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      lines: ['Midlands, United Kingdom'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['Contact for number'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@midlandenginebikes.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: ['Mon-Fri: 9AM-6PM', 'Sat: 10AM-4PM'],
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.04)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 border border-primary/30 rounded-full text-primary uppercase tracking-[0.25em] text-xs font-semibold">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ready to <span className="text-primary">Build</span>?
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">
            Drop us a message and we'll get back to you within 24 hours. No pressure, just honest advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info column */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{item.title}</h3>
                  {item.lines.map((line, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Trust badge */}
            <div className="p-4 border border-primary/20 rounded-xl bg-primary/5 mt-6">
              <p className="text-sm text-primary font-medium mb-1">🔒 Your enquiry is private</p>
              <p className="text-xs text-muted-foreground">We never share your information. All enquiries are handled directly by our build team.</p>
            </div>
          </div>

          {/* Form column */}
          <div
            className={`lg:col-span-3 bg-card border border-border p-8 sm:p-10 rounded-2xl shadow-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">Send us a message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <Send size={28} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs mb-2 text-muted-foreground uppercase tracking-wider font-semibold">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/50 text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs mb-2 text-muted-foreground uppercase tracking-wider font-semibold">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/50 text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs mb-2 text-muted-foreground uppercase tracking-wider font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/50 text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="bundle" className="block text-xs mb-2 text-muted-foreground uppercase tracking-wider font-semibold">Interested In</label>
                  <select
                    id="bundle"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a Bundle</option>
                    <option value="light">Light Bundle</option>
                    <option value="standard">Standard Bundle</option>
                    <option value="performance">Performance Bundle</option>
                    <option value="custom">Custom Build</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs mb-2 text-muted-foreground uppercase tracking-wider font-semibold">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/50 text-sm resize-none"
                    placeholder="Tell us about what you're looking for..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl transition-all font-bold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
