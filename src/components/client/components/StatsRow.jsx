import React from 'react';
import { Globe, BarChart2, Zap, Star } from 'lucide-react';

const StatsRow = () => {
  const stats = [
    {
      icon: <Globe size={24} />,
      value: "6 pays",
      label: "Afrique de l'Ouest"
    },
    {
      icon: <BarChart2 size={24} />,
      value: "2 847",
      label: "commandes aujourd'hui"
    },
    {
      icon: <Zap size={24} />,
      value: "< 2s",
      label: "latence ticket cuisine"
    },
    {
      icon: <Star size={24} />,
      value: "5 rôles",
      label: "interfaces dédiées"
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">
            {stat.icon}
          </div>
          <div className="stat-value text-white">
            {stat.value}
          </div>
          <div className="stat-label">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
