import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="bg-orange text-white flex items-center justify-center font-bold"
            style={{ width: '32px', height: '32px', borderRadius: '8px', fontSize: '1.25rem' }}
          >
            W
          </div>
          <div className="font-semibold" style={{ color: '#374151', fontSize: '1rem' }}>
            WinResto <span className="font-medium text-gray-400" style={{ marginLeft: '4px' }}>· Commande à table par QR code</span>
          </div>
        </div>
        
        <div>
          <span className="badge-pill badge-green">
            <span style={{ marginRight: '6px', fontSize: '10px' }}>●</span> MVP v1.0 - Maquette Interactive
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
