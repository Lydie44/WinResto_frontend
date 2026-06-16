import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Phone, Receipt } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { restaurantInfo } from '../../data/menuData';

const TrackingPage = () => {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="mobile-layout" style={{ background: '#F9FAFB', minHeight: '100vh', padding: '1rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-gray-500)' }}>Votre commande</span>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }}></div>
      </div>
      <h1 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>CMD-151</h1>

      {/* Timeline Card */}
      <div className="cart-card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Suivi de votre commande</h3>
        
        <div className="tracking-timeline">
          <div className="timeline-item completed">
            <div className="timeline-icon">
              <CheckCircle2 size={20} color="white" />
            </div>
            <div className="timeline-content">
              <h4 style={{ color: '#22C55E' }}>Commande reçue</h4>
            </div>
          </div>
          
          <div className="timeline-item active">
            <div className="timeline-icon pulse-animation">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></div>
            </div>
            <div className="timeline-content">
              <h4 style={{ color: '#6366F1' }}>En préparation</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-gray-500)' }}>Votre plat arrive bientôt !</p>
            </div>
          </div>
          
          <div className="timeline-item pending">
            <div className="timeline-icon">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D1D5DB' }}></div>
            </div>
            <div className="timeline-content">
              <h4>Prête à servir</h4>
            </div>
          </div>
          
          <div className="timeline-item pending last">
            <div className="timeline-icon">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D1D5DB' }}></div>
            </div>
            <div className="timeline-content">
              <h4>Servie</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="cart-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Articles commandés</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {cartItems.length > 0 ? cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray-500)', background: '#F3F4F6', padding: '0.1rem 0.4rem', borderRadius: '0.25rem' }}>{item.qty}×</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.name}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6366F1', background: '#EEF2FF', padding: '0.2rem 0.5rem', borderRadius: '999px' }}>En prép.</span>
            </div>
          )) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray-500)', background: '#F3F4F6', padding: '0.1rem 0.4rem', borderRadius: '0.25rem' }}>1×</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Brochettes de bœuf</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6366F1', background: '#EEF2FF', padding: '0.2rem 0.5rem', borderRadius: '999px' }}>En prép.</span>
            </div>
          )}
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--primary-orange)', fontWeight: '500', fontSize: '0.875rem' }}>Total payé</span>
          <span style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1rem' }}>{totalPrice > 0 ? totalPrice : 4500} FCFA</span>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn-outline-orange" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '0.75rem', fontWeight: '600', border: '1px solid var(--primary-orange)', color: 'var(--primary-orange)', background: 'white' }}>
          <Phone size={18} /> Appeler
        </button>
        <button className="btn-outline-red" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '0.75rem', fontWeight: '600', border: '1px solid #E11D48', color: '#E11D48', background: 'white' }}>
          <Receipt size={18} /> Addition
        </button>
      </div>

    </div>
  );
};

export default TrackingPage;
