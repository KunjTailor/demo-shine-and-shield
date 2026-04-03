import React from 'react';
import { Info } from 'lucide-react';
import './Watermark.css';

const Watermark = () => {
  return (
    <div className="locallift-watermark">
      <Info size={14} className="watermark-icon" />
      <span>Concept Demo by <strong>LocalLift Web Studios</strong></span>
    </div>
  );
};

export default Watermark;
