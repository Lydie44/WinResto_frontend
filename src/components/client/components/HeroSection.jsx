import React from 'react';
import StatsRow from './StatsRow';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span className="badge-pill badge-orange-outline" style={{ display: 'flex', gap: '0.5rem' }}>
            <MapPin size={14} />
            Cotonou, Bénin - Marché initial Afrique de l'Ouest
          </span>
        </div>

        <h1 className="hero-title">
          La restauration <br />
          <span className="text-orange">réinventée</span> par le QR code
        </h1>

        <p className="hero-subtitle">
          5 interfaces dédiées, 0 application native. Explorez chaque rôle dans son<br />
          contexte réel — de la table du client à la cuisine, jusqu'au back-office SaaS.
        </p>

        <StatsRow />

      </div>
    </section>
  );
};

export default HeroSection;
