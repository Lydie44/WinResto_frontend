import React from 'react';

const FeaturesTags = () => {
  const tags = [
    "QR Code par table", "0 Inscription client", "KDS temps réel", 
    "Géofencing", "Multi-tenant SaaS", "Recharts analytics", 
    "Mode sombre cuisine", "Plans tarifaires", "Workflow validation", 
    "Toasts temps réel", "Horloge live", "Timers cuisine"
  ];

  return (
    <div className="feature-tags-container" style={{ paddingBottom: '3rem' }}>
      {tags.map((tag, index) => (
        <span key={index} className="feature-tag-pill">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default FeaturesTags;
