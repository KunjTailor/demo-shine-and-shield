import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const tiles = [
  { image: '/images/hero.png', alt: 'Detailer washing car', label: 'Mobile Wash Process' },
  { image: '/images/ceramic.png', alt: 'Ceramic coating gloss', label: 'Ceramic Coating Gloss' },
  { image: '/images/interior.png', alt: 'Clean car interior', label: 'Interior Deep Clean' },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <span className="badge">Our Work</span>
          <h1 className="mb-4">Before &amp; After Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A small sample of the transformations we perform every day in driveways across Chester County. Our results speak for themselves.
          </p>
        </div>
      </section>

      <section className="section pb-4">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Featured Result</span>
            <h2>The Power of Professional Detailing</h2>
          </div>

          <div className="ba-showcase">
            <img src="/images/before-after.png" alt="Before/After of muddy car" />
            <div className="ba-showcase-caption">
              <h3>Premium Exterior Detail</h3>
              <p className="text-sm text-muted">Complete mud removal, iron decontamination, and ceramic sealant application.</p>
            </div>
          </div>

          <div className="section-header text-center mt-16">
            <span className="badge">In Action</span>
            <h2>Our Work in Action</h2>
          </div>

          <div className="gallery-grid">
            {tiles.map((tile) => (
              <div key={tile.label} className="gallery-tile">
                <img src={tile.image} alt={tile.alt} />
                <div className="gallery-tile-label">{tile.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center bg-near-white">
        <div className="container">
          <h2>Your Car Deserves to Shine</h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 mb-6">
            Let's add your vehicle to the gallery. Book your mobile detail today.
          </p>
          <div>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Your Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
