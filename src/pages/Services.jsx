import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import './Pages.css';

const services = [
  {
    title: 'Premium Exterior Detail',
    image: '/images/exterior.png',
    alt: 'Exterior wash',
    description:
      'A complete reset for your paint. We safely remove embedded contaminants, enhance gloss, and apply a premium sealant for months of protection.',
    idealFor:
      'Daily drivers needing a protective shine, prep for seasonal changes, or cars that have lost their gloss.',
    features: [
      'Hand Wash (Two-bucket method)',
      'Chemical Iron Decontamination',
      'Clay Bar Treatment',
      'Wheels, Tires & Wheel Wells Cleaned and Dressed',
      '6-Month Premium Paint Sealant',
    ],
  },
  {
    title: 'Interior Deep Clean',
    image: '/images/interior.png',
    alt: 'Interior detail',
    reverse: true,
    description:
      'A complete overhaul of your cabin. We address stains, pet hair, dirt in crevices, and odor to bring back that new car feeling.',
    idealFor:
      'Family vehicles, cars being prepared for sale, or returning a car to its prime after a long road trip.',
    features: [
      'Thorough Vacuuming (including trunk)',
      'Steam Cleaning & Disinfecting Surfaces',
      'Shampooing Carpets & Upholstery',
      'Leather Deep Cleaning & Conditioning',
      'Streak-Free Interior Windows',
    ],
  },
  {
    title: 'Ceramic Coating',
    image: '/images/ceramic.png',
    alt: 'Ceramic Coating gloss',
    description:
      'The ultimate in automotive protection. A liquid polymer that bonds to your factory clear coat, providing years of extreme gloss, hydrophobic properties, and UV defense.',
    idealFor:
      'Brand new vehicles protecting factory paint, luxury cars, or anyone who wants their vehicle to stay cleaner longer.',
    features: [
      'Everything in Exterior Detail',
      'Single Stage Machine Polish (removes minor swirls)',
      'Surface Prep Pad Down',
      'Professional Grade Ceramic Coating applied to Paint, Trim & Glass',
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <span className="badge">Packages</span>
          <h1 className="mb-4">Our Detailing Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            From essential maintenance to full showroom restoration, we offer transparently priced mobile packages to protect your investment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((service) => (
            <div key={service.title} className={`service-row ${service.reverse ? 'reverse' : ''}`}>
              <img src={service.image} alt={service.alt} className="service-row-media" />
              <div className="service-row-text">
                <h2>{service.title}</h2>
                <p className="text-muted mb-4">{service.description}</p>
                <div className="ideal-for">
                  <strong>Ideal for:</strong> {service.idealFor}
                </div>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 color="var(--color-steel-blue)" size={20} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">Request Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
