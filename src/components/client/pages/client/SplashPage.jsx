import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { restaurantInfo } from '../../data/menuData';

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-layout splash-bg">
      <div className="splash-card">
        
        <div className="emoji-container">
          {restaurantInfo.emoji}
        </div>
        
        <h1 className="splash-title">
          {restaurantInfo.name} 
          <span className="table-badge">
            {restaurantInfo.table}
          </span>
        </h1>
        
        <p className="splash-subtitle">
          {restaurantInfo.subtitle}
        </p>

        <div className="welcome-text">
          <p>Bienvenue ! 👋</p>
          <p>
            Votre table est prête. Commandez à votre rythme.
          </p>
        </div>

        <button 
          onClick={() => navigate('/client/menu')}
          className="btn-primary"
        >
          <Utensils size={18} /> Voir le menu
        </button>

        <p className="no-signup-text">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Aucune inscription requise
        </p>
      </div>

      <div className="splash-footer">
        <button onClick={() => navigate('/')}>
          ← Changer de rôle
        </button>
        <span>Propulsé par WinResto</span>
      </div>
    </div>
  );
};

export default SplashPage;
