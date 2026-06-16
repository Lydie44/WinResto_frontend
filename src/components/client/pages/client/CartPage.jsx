import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, User, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { restaurantInfo } from '../../data/menuData';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, addItem, removeItem, deleteItem, totalItems, totalPrice } = useCart();

  return (
    <div className="mobile-layout" style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* Header */}
      <div className="menu-header" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        <button className="menu-back" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} /> Mon panier
        </button>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-gray-500)', marginLeft: '1.75rem' }}>
          {restaurantInfo.table} · {totalItems} article{totalItems > 1 ? 's' : ''}
        </span>
      </div>

      <div className="cart-container">
        
        {/* Items List */}
        {cartItems.length === 0 ? (
          <div className="cart-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <p style={{ color: 'var(--text-gray-500)' }}>Votre panier est vide.</p>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-card">
                <div className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <div className="cart-item-price">{item.price} FCFA</div>
                  </div>

                  <div className="cart-controls">
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => removeItem(item.id)}>
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.qty}</span>
                      <button className="qty-btn add" onClick={() => addItem(item)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className="btn-delete" onClick={() => deleteItem(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <input 
                  type="text" 
                  className="cart-note-input" 
                  placeholder="Note pour la cuisine (ex: sans piment)" 
                />
              </div>
            ))}
            
            {/* Summary Card */}
            <div className="cart-card">
              <div className="cart-summary-row">
                <span>Sous-total ({totalItems} art.)</span>
                <span>{totalPrice} FCFA</span>
              </div>
              <div className="cart-summary-row total">
                <span>Total</span>
                <span className="price">{totalPrice} FCFA</span>
              </div>
            </div>

            {/* User Info Card */}
            <div className="cart-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: '#3B82F6' }}>
                <User size={16} />
                <span>Votre prénom ? <span style={{ color: 'var(--text-gray-400)', fontWeight: 400 }}>(facultatif)</span></span>
              </div>
              <input 
                type="text" 
                className="cart-note-input" 
                placeholder="Ex: Kouassi — pour qu'on vous serve plus facilement" 
              />
            </div>
          </>
        )}
      </div>

      {/* Bottom Fixed Bar */}
      {cartItems.length > 0 && (
        <div className="cart-bottom-bar" style={{ maxWidth: '1200px', margin: '0 auto', left: '0', right: '0', transform: 'none' }}>
          <button className="btn-primary" onClick={() => navigate('/client/location')} style={{ width: '100%', maxWidth: '400px' }}>
            Envoyer la commande → {totalPrice} FCFA
          </button>
          <button className="btn-continue" onClick={() => navigate('/client/menu')}>
            ← Continuer à parcourir le menu
          </button>
        </div>
      )}

    </div>
  );
};

export default CartPage;
