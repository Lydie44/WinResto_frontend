import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { menuItems, categories, restaurantInfo } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import MenuItem from '../../components/client/MenuItem';

const MenuPage = () => {
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useCart();
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredItems = activeCategory === "Tout" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="mobile-layout" style={{ background: '#F9FAFB' }}>
      
      {/* Menu Header */}
      <div className="menu-header">
        <div className="menu-topbar">
          <button className="menu-back" onClick={() => navigate('/client')}>
            <ChevronLeft size={20} />
            <span style={{ fontSize: '0.875rem' }}>
              {restaurantInfo.emoji} {restaurantInfo.name}
            </span>
            <span className="table-badge" style={{ transform: 'scale(0.8)', marginLeft: '-4px' }}>
              {restaurantInfo.table}
            </span>
          </button>
          
          <button className="cart-btn" onClick={() => navigate('/client/cart')}>
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </div>
        
        {/* Categories */}
        <div className="categories-scroll">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="menu-list">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
        
        <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-gray-400)', fontSize: '0.75rem' }}>
          Fin du menu
        </div>
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <button className="floating-cart-btn" onClick={() => navigate('/client/cart')}>
          <span className="floating-cart-badge">{totalItems}</span>
          <span className="floating-cart-text">Voir mon panier</span>
          <span className="floating-cart-price">{totalPrice} FCFA</span>
        </button>
      )}

    </div>
  );
};

export default MenuPage;
