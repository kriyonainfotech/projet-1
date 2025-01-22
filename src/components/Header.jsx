import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full  backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        
     
      </nav>
    </header>
  );
}