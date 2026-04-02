import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Clock, CheckCircle2, Star, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero.png" alt="Mobile Auto Detailing in driveway" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">Premium Mobile Detailing</span>
            <h1 className="hero-title">
              Showroom Shine.<br />
              Delivered to Your Driveway.
            </h1>
            <p className="hero-subtitle">
              Chester County's most reliable and professional mobile detailing service. We bring the water, power, and expertise—you enjoy a spotless vehicle without leaving home.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:5550198" className="btn btn-outline-white btn-lg desktop-only">
                <Phone size={20} /> Call Now
              </a>
            </div>
            
            <div className="trust-badges">
              <div className="trust-badge">
                <CheckCircle2 className="trust-icon" />
                <span>Fully Equipped Mobile Van</span>
              </div>
              <div className="trust-badge">
                <Shield className="trust-icon" />
                <span>Licensed & Insured</span>
              </div>
              <div className="trust-badge">
                <Star className="trust-icon" fill="currentColor" />
                <span>150+ 5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">How it Works</span>
            <h2>Premium Service, Zero Hassle</h2>
            <p className="text-muted max-w-2xl mx-auto">Skip the waiting room. We've built a seamless process designed entirely around your convenience.</p>
          </div>
          
          <div className="grid grid-3 steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <Clock size={32} />
              </div>
              <h3>1. Book Your Slot</h3>
              <p>Request a quote online or give us a call. We'll give you a clear, upfront price and schedule a time that works for you.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <Phone size={32} />
              </div>
              <h3>2. We Come To You</h3>
              <p>Our fully self-contained van arrives at your home or office. We bring our own spot-free water and power supply.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <Sparkles size={32} />
              </div>
              <h3>3. Your Car Looks New</h3>
              <p>You inspect our work to ensure 100% satisfaction, and drive away in a vehicle that looks better than the day you bought it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section services-preview">
        <div className="container">
          <div className="services-header flex-between">
            <div>
              <span className="badge">Our Services</span>
              <h2>Professional Detailing Packages</h2>
            </div>
            <Link to="/services" className="btn btn-outline hidden-mobile">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-3 mt-8">
            <Link to="/services" className="service-card">
              <div className="service-img-wrapper">
                <img src="/images/exterior.png" alt="Exterior Detail" />
              </div>
              <div className="service-content">
                <h3>Exterior Detail</h3>
                <p>Complete foam wash, iron decontamination, clay bar treatment, and premium ceramic sealant.</p>
                <span className="service-link">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
            
            <Link to="/services" className="service-card">
              <div className="service-img-wrapper">
                <img src="/images/interior.png" alt="Interior Detail" />
              </div>
              <div className="service-content">
                <h3>Interior Reset</h3>
                <p>Deep vacuum, steam cleaning, stain extraction, and leather conditioning for a fresh cabin.</p>
                <span className="service-link">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
            
            <Link to="/services" className="service-card">
              <div className="service-img-wrapper">
                <img src="/images/ceramic.png" alt="Ceramic Coating" />
              </div>
              <div className="service-content">
                <h3>Ceramic Coating</h3>
                <p>Multi-year paint protection providing insane gloss, UV resistance, and hydrophobic self-cleaning.</p>
                <span className="service-link">Learn More <ChevronRight size={16} /></span>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8 hidden-desktop">
            <Link to="/services" className="btn btn-outline w-full">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2 items-center split-section">
            <div className="split-content">
              <span className="badge">The Difference</span>
              <h2>We Restore the Feeling of a Brand New Car.</h2>
              <p className="text-lg">
                Whether it's hauling kids, commuting, or enduring harsh winter elements, your vehicle goes through a lot. Our rigorous detailing processes reverse the wear and tear.
              </p>
              <ul className="checklist mt-6">
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Remove embedded brake dust & road grime</li>
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Eradicate pet hair and hidden odors</li>
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Protect paint against UV damage & oxidation</li>
              </ul>
              <div className="mt-8">
                <Link to="/gallery" className="btn btn-secondary">
                  View Our Work Gallery
                </Link>
              </div>
            </div>
            <div className="split-media">
              <div className="ba-container">
                <img src="/images/before-after.png" alt="Car before and after detailing" className="rounded-lg shadow-xl" />
                <div className="ba-labels">
                  <span className="label before">Before</span>
                  <span className="label after">After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <section className="service-area-strip">
        <div className="container">
          <div className="strip-content flex-between items-center">
            <div className="strip-text">
              <h3>We come to your location in Chester County.</h3>
              <p>Proudly serving Downingtown, West Chester, Exton, Malvern, and surrounding areas.</p>
            </div>
            <Link to="/contact" className="btn btn-primary white-bg-btn">
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-near-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Reviews</span>
            <h2>What Our Neighbors Say</h2>
          </div>
          
          <div className="grid grid-3 mt-8">
            <div className="testimonial-card card">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />)}
              </div>
              <p className="quote">"Incredible service. I had a coffee stain on my passenger seat for months. Shine & Shield got it out completely and my car smells brand new. The fact that they did it in my driveway while I worked from home was game-changing."</p>
              <div className="author">
                <strong>Michael T.</strong>
                <span>West Chester, PA</span>
              </div>
            </div>
            
            <div className="testimonial-card card">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />)}
              </div>
              <p className="quote">"I got the ceramic coating package on my new Tesla. The gloss is unbelievable and washing it now takes me literally 10 minutes because the water just slides right off. Highly professional and punctual team."</p>
              <div className="author">
                <strong>Sarah L.</strong>
                <span>Downingtown, PA</span>
              </div>
            </div>
            
            <div className="testimonial-card card">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />)}
              </div>
              <p className="quote">"I'm super picky about who touches my cars. These guys use all the right techniques—two bucket method, fresh microfibers, safe chemicals. Easiest recommendation I can make."</p>
              <div className="author">
                <strong>David K.</strong>
                <span>Exton, PA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <h2>Ready for that New Car Feeling?</h2>
          <p>Get a fast, free quote today and see why we're the preferred choice for mobile detailing.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
