import React from 'react';
import { ArrowRight } from 'lucide-react';

const RoleCard = ({ 
  icon, 
  deviceBadge, 
  deviceBadgeClass, 
  title, 
  subtitle, 
  subtitleColor, 
  description, 
  tags, 
  footerText 
}) => {
  return (
    <div className="role-card">
      <div className="role-header">
        <div className="role-icon-wrapper" style={{ color: subtitleColor }}>
          {icon}
        </div>
        <span className={`badge-pill ${deviceBadgeClass}`}>
          {deviceBadge}
        </span>
      </div>
      
      <h3 className="role-title">{title}</h3>
      <div className="role-subtitle" style={{ color: subtitleColor }}>
        {subtitle}
      </div>
      
      <p className="role-desc">
        {description}
      </p>
      
      <div className="role-tags">
        {tags.map((tag, index) => (
          <span key={index} className="role-tag">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="role-footer">
        <span>{footerText}</span>
        <ArrowRight size={16} className="role-arrow" />
      </div>
    </div>
  );
};

export default RoleCard;
