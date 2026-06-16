import React from 'react';
import { Sparkles, Leaf, Flame, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const MenuItem = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="menu-item-card">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} className="item-image" />
        {item.popular && (
          <div className="item-badge-top">
            <Sparkles size={12} /> Populaire
          </div>
        )}
      </div>
      
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-price">{item.price} FCFA</span>
        </div>
        
        <p className="item-desc">{item.description}</p>
        
        <div className="item-footer">
          <div className="dietary-badges">
            {item.badges.includes("Végétarien") && (
              <span className="dietary-badge veg">
                <Leaf size={14} /> Végétarien
              </span>
            )}
            {item.badges.includes("Épicé") && (
              <span className="dietary-badge spicy">
                <Flame size={14} /> Épicé
              </span>
            )}
          </div>
          
          <button className="btn-add" onClick={() => addItem(item)}>
            <Plus size={14} /> Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
