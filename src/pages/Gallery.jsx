import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="section bg-near-white text-center">
        <div className="container">
          <span className="badge">Our Work</span>
          <h1 className="mb-4">Before & After Gallery</h1>
          <p className="text-muted max-w-2xl mx-auto">
            A small sample of the transformations we perform every day in driveways across Chester County. Our results speak for themselves.
          </p>
        </div>
      </section>

      <section className="section pb-4">
        <div className="container">
          {/* Main Before After */}
          <div className="text-center mb-8">
            <h2 className="mb-6">The Power of Professional Detailing</h2>
          </div>
          <div className="card max-w-4xl mx-auto mb-12 p-0 overflow-hidden" style={{ maxWidth: '1000px', margin: '0 auto', padding: 0 }}>
            <img src="/images/before-after.png" alt="Before/After of muddy car" style={{ width: '100%', display: 'block' }} />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg">Premium Exterior Detail</h3>
              <p className="text-sm text-muted">Complete mud removal, iron decontamination, and ceramic sealant application.</p>
            </div>
          </div>
          
          <h2 className="text-center mb-8 mt-16" style={{ marginTop: '4rem' }}>Our Work in Action</h2>
          
          <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
            <div className="card p-0 overflow-hidden" style={{ padding: 0 }}>
              <img src="/images/hero.png" alt="Detailer washing car" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div className="p-4">
                <p className="font-medium text-center">Mobile Wash Process</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden" style={{ padding: 0 }}>
              <img src="/images/ceramic.png" alt="Ceramic coating gloss" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div className="p-4">
                <p className="font-medium text-center">Ceramic Coating Gloss</p>
              </div>
            </div>

            <div className="card p-0 overflow-hidden" style={{ padding: 0 }}>
              <img src="/images/interior.png" alt="Clean car interior" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div className="p-4">
                <p className="font-medium text-center">Interior Deep Clean</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Your Car Deserves to Shine</h2>
          <div className="mt-6">
            <Link to="/contact" className="btn btn-primary btn-lg">Book Your Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
