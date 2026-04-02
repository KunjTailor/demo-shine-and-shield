import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="section bg-near-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge">Get a Quote</span>
            <h1>Let's Get Your Car Shining</h1>
            <p className="text-muted max-w-2xl mx-auto mt-4">
              Fill out the form below with your vehicle details and the services you're interested in. We'll get back to you within 24 hours with a customized quote and available dates.
            </p>
          </div>

          <div className="grid grid-2">
            {/* Form */}
            <div className="card shadow-lg">
              {formStatus === 'success' ? (
                <div className="success-state text-center py-12">
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-6" style={{ backgroundColor: 'rgba(59, 89, 152, 0.1)' }}>
                    <CalendarCheck size={32} color="var(--color-steel-blue)" />
                  </div>
                  <h3 className="text-2xl mb-2">Request Received!</h3>
                  <p className="text-muted mb-6">
                    Thank you for reaching out to Shine & Shield. We're reviewing your vehicle details and will text/email you a quote and our next available time slot shortly.
                  </p>
                  <button onClick={() => setFormStatus('idle')} className="btn btn-outline">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input type="text" id="name" className="form-input" required placeholder="John Doe" disabled={formStatus === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" className="form-input" required placeholder="(555) 000-0000" disabled={formStatus === 'submitting'} />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-input" required placeholder="john@example.com" disabled={formStatus === 'submitting'} />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="vehicle">Vehicle Make & Model</label>
                    <input type="text" id="vehicle" className="form-input" required placeholder="e.g. 2021 Ford F-150 SuperCrew" disabled={formStatus === 'submitting'} />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Needed</label>
                    <select id="service" className="form-input" required disabled={formStatus === 'submitting'}>
                      <option value="">Select a Service...</option>
                      <option value="exterior">Exterior Detail</option>
                      <option value="interior">Interior Deep Clean</option>
                      <option value="full">Full Showroom Detail</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="other">Not Sure / Custom</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message (Optional)</label>
                    <textarea id="message" className="form-textarea" placeholder="Any specific areas of concern? (e.g. pet hair, stain on passenger seat)" disabled={formStatus === 'submitting'}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending Request...' : 'Get My Free Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="contact-info-panel card mb-6" style={{ backgroundColor: 'var(--color-charcoal)', color: 'white' }}>
                <h3 className="mb-6 text-white">Direct Contact</h3>
                
                <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <a href="tel:5550198" className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
                    <div className="contact-icon" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                      <Phone size={24} color="var(--color-accent-gold)" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80" style={{ fontSize: '0.875rem', opacity: 0.8 }}>Call or Text Us</div>
                      <div className="font-bold text-lg" style={{ fontSize: '1.125rem', fontWeight: 600 }}>(555) 019-8822</div>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@shineandshield.com" className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
                    <div className="contact-icon" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                      <Mail size={24} color="var(--color-accent-gold)" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80" style={{ fontSize: '0.875rem', opacity: 0.8 }}>Email Us</div>
                      <div className="font-bold text-lg" style={{ fontSize: '1.125rem', fontWeight: 600 }}>hello@shineandshield.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="mb-4">Business Details</h3>
                <ul className="flex flex-col gap-4 text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={20} color="var(--color-steel-blue)" /> 
                    <span><strong>Service Area:</strong> Chester County, PA <br/>(Downingtown, West Chester, Exton, Malvern)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={20} color="var(--color-steel-blue)" /> 
                    <span><strong>Hours:</strong> Mon-Sat 8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
