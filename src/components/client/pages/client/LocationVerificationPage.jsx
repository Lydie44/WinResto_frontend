import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { restaurantInfo } from '../../data/menuData';

const LocationVerificationPage = () => {
  const navigate = useNavigate();

  const handleAuthorize = () => {
    // Mock location verification delay
    setTimeout(() => {
      navigate('/client/tracking');
    }, 1000);
  };

  return (
    <div className="mobile-layout splash-bg">
      <div className="splash-card">
        <div className="emoji-container" style={{ background: '#FFF7ED', color: '#EA580C', borderRadius: '50%', border: '4px solid #FFEDD5', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MapPin size={40} />
        </div>
        
        <h2 className="splash-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
          Confirmez votre présence
        </h2>
        
        <p className="splash-subtitle" style={{ color: 'var(--text-gray-500)', lineHeight: '1.5', fontSize: '0.875rem' }}>
          Pour commander, <strong>{restaurantInfo.name}</strong> demande à vérifier que vous êtes bien sur place.
        </p>

        <button className="btn-primary" onClick={handleAuthorize} style={{ padding: '1rem', marginBottom: '1.5rem', background: '#EA580C' }}>
          <MapPin size={18} /> Autoriser ma localisation
        </button>

        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: '1.4' }}>
          Votre position n'est pas enregistrée — elle est vérifiée une seule fois et non conservée.
        </p>
      </div>
    </div>
  );
};

export default LocationVerificationPage;
