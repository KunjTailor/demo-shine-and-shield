import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="services-page">
      <section className="section bg-near-white text-center">
        <div className="container">
          <span className="badge">Packages</span>
          <h1 className="mb-4">Our Detailing Services</h1>
          <p className="text-muted max-w-2xl mx-auto">
            From essential maintenance to full showroom restoration, we offer transparently priced mobile packages to protect your investment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 items-center mb-16" style={{ marginBottom: '4rem' }}>
            <img src="/images/exterior.png" alt="Exterior wash" className="rounded-lg shadow-md" style={{ borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} />
            <div>
              <h2 className="mb-2">Premium Exterior Detail</h2>
              <p className="text-muted mb-4">A complete reset for your paint. We safely remove embedded contaminants, enhance gloss, and apply a premium sealant for months of protection.</p>
              <div className="mb-6">
                <strong>Ideal for:</strong> Daily drivers needing a protective shine, prep for seasonal changes, or cars that have lost their gloss.
              </div>
              <ul className="checklist mb-6" style={{ listStyle: 'none' }}>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Hand Wash (Two-bucket method)</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Chemical Iron Decontamination</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Clay Bar Treatment</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Wheels, Tires & Wheel Wells Cleaned and Dressed</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> 6-Month Premium Paint Sealant</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            </div>
          </div>

          <div className="grid grid-2 items-center mb-16" style={{ marginBottom: '4rem' }}>
            <div className="desktop-order-1" style={{ order: 2 }}>
              <h2 className="mb-2">Interior Deep Clean</h2>
              <p className="text-muted mb-4">A complete overhaul of your cabin. We address stains, pet hair, dirt in crevices, and odor to bring back that new car feeling.</p>
              <div className="mb-6">
                <strong>Ideal for:</strong> Family vehicles, cars being prepared for sale, or returning a car to its prime after a long road trip.
              </div>
              <ul className="checklist mb-6" style={{ listStyle: 'none' }}>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Thorough Vacuuming (including trunk)</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Steam Cleaning & Disinfecting Surfaces</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Shampooing Carpets & Upholstery</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Leather Deep Cleaning & Conditioning</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Streak-Free Interior Windows</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            </div>
            <img src="/images/interior.png" alt="Interior detail" className="rounded-lg shadow-md desktop-order-2" style={{ borderRadius: '12px', boxShadow: 'var(--shadow-md)', order: 1 }} />
          </div>

          <div className="grid grid-2 items-center">
            <img src="/images/ceramic.png" alt="Ceramic Coating gloss" className="rounded-lg shadow-md" style={{ borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} />
            <div>
              <h2 className="mb-2">Ceramic Coating</h2>
              <p className="text-muted mb-4">The ultimate in automotive protection. A liquid polymer that bonds to your factory clear coat, providing years of extreme gloss, hydrophobic properties, and UV defense.</p>
              <div className="mb-6">
                <strong>Ideal for:</strong> Brand new vehicles protecting factory paint, luxury cars, or anyone who wants their vehicle to stay cleaner longer.
              </div>
              <ul className="checklist mb-6" style={{ listStyle: 'none' }}>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Everything in Exterior Detail</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Single Stage Machine Polish (removes minor swirls)</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Surface Prep Pad Down</li>
                <li style={{ display:'flex', gap:'8px', marginBottom:'8px' }}><CheckCircle2 color="var(--color-steel-blue)" size={20} /> Professional Grade Ceramic Coating applied to Paint, Trim & Glass</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
