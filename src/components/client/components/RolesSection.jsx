import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleCard from './RoleCard';
import { Smartphone, Tablet, ChefHat, Monitor, Shield } from 'lucide-react';

const RolesSection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      icon: <Smartphone size={24} />,
      deviceBadge: "PWA Mobile",
      deviceBadgeClass: "badge-green",
      title: "Client",
      subtitle: "Table 5 - Le Palmier",
      subtitleColor: "#F97316", // orange
      description: "Menu par QR code, commande et suivi en temps réel — sans inscription.",
      tags: ["Scanner QR", "Choisir", "Commander", "Suivre"],
      footerText: "390px - iPhone frame",
      path: "/client"
    },
    {
      icon: <Tablet size={24} />,
      deviceBadge: "PWA Tablette",
      deviceBadgeClass: "badge-purple",
      title: "Serveur",
      subtitle: "Fatoumata - Service en salle",
      subtitleColor: "#3B82F6", // blue
      description: "Plan de salle en temps réel, alertes commandes et appels clients.",
      tags: ["Surveiller", "Confirmer", "Servir"],
      footerText: "768px - tablette",
      path: "#" // Pour l'instant
    },
    {
      icon: <ChefHat size={24} />,
      deviceBadge: "Tablette fixe",
      deviceBadgeClass: "badge-gray",
      title: "Cuisine - KDS",
      subtitle: "Bintou - Poste cuisine",
      subtitleColor: "#EAB308", // yellow
      description: "File de tickets mode sombre, timers live, gros boutons tactiles.",
      tags: ["Recevoir", "Préparer", "Notifier"],
      footerText: "1024px - mode sombre",
      path: "#" // Pour l'instant
    },
    {
      icon: <Monitor size={24} />,
      deviceBadge: "Desktop",
      deviceBadgeClass: "badge-orange",
      title: "Gérant - Admin",
      subtitle: "Djidjoho - Le Palmier",
      subtitleColor: "#F97316", // orange
      description: "Dashboard analytique, menu, tables & QR codes, staff et géofencing.",
      tags: ["Analyser", "Gérer", "Optimiser"],
      footerText: "1440px - desktop",
      path: "#" // Pour l'instant
    },
    {
      icon: <Shield size={24} />,
      deviceBadge: "Back-office SaaS",
      deviceBadgeClass: "badge-purple",
      title: "Super Admin",
      subtitle: "Ismaël - Équipe WinResto",
      subtitleColor: "#8B5CF6", // purple
      description: "Plateforme SaaS multi-tenant : restaurants, inscriptions, plans, MRR.",
      tags: ["Valider", "Suivre", "Facturer"],
      footerText: "1440px - desktop",
      path: "#" // Pour l'instant
    }
  ];

  return (
    <section className="roles-section">
      <div className="container">
        <h2 className="section-title">CHOISISSEZ VOTRE RÔLE</h2>
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div key={index} onClick={() => { if(role.path !== "#") navigate(role.path) }} style={{ cursor: role.path !== "#" ? 'pointer' : 'default' }}>
              <RoleCard {...role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
