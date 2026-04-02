import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="section bg-near-white">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <span className="badge">Our Story</span>
              <h1 className="mb-4">Driven by Perfection. Built on Convenience.</h1>
              <p className="text-lg text-muted mb-4">
                What started as a passion for keeping our own vehicles looking flawless has grown into Chester County's premier mobile detailing service. Shine & Shield was founded with a simple goal: combine uncompromising detailing quality with the ultimate convenience for busy professionals and families.
              </p>
              <p className="text-muted mb-6">
                We know how hard it is to carve out time to sit in a waiting room while your car is washed. That's why we built our business around coming to you. Equipped with our own ultra-purified spot-free water and power supply, we can turn your driveway or office parking lot into a professional detail bay.
              </p>
              
              <ul className="checklist">
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Unmatched Professionalism & Communication</li>
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Fully Trained, Licensed & Insured Technicians</li>
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Premium, Safe Chemicals & Techniques (No harm to clear coat)</li>
                <li><CheckCircle2 color="var(--color-steel-blue)" /> Serving Downingtown, West Chester, Exton & beyond</li>
              </ul>
            </div>
            <div>
              <img src="/images/exterior.png" alt="Detailer at work" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Ready to experience the difference?</h2>
          <div className="mt-6">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us for a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
