'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import {useUserConnection} from "../../context/AuthContext"; // Assuming handleOut is exported from AuthContext

type Article = {
  id: number;
  name: string;
  image: string;
  prix: number;
  quantite: number;
};

export default function Header() {
  const pathname = usePathname();
  const [panierCount, setPanierCount] = useState(0);
  const { handleOut } = useUserConnection();

  const updatePanierCount = () => {
    const panier = JSON.parse(localStorage.getItem('panier') || '[]');
    const count = panier.reduce((acc: number, item: Article) => acc + item.quantite, 0);
    setPanierCount(count);
  };

  useEffect(() => {
    updatePanierCount();
    const handlePanierUpdate = () => updatePanierCount();
    window.addEventListener('panierUpdated', handlePanierUpdate);
    return () => window.removeEventListener('panierUpdated', handlePanierUpdate);
  }, []);

  return (
    <nav style={{position: "sticky", top: "0", zIndex: "1"}} className="navbar navbar-expand-lg navbar-dark bg-light px-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" href="/">ElectroShop</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={pathname === '/' ? "nav-link text-primary" : "nav-link text-dark"} href="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className={pathname === '/telPage' ? "nav-link text-primary" : "nav-link text-dark"} href="/telPage">Téléphones</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link href="/panier" className="btn btn-outline-light position-relative">
              <FaShoppingCart size={25} style={{color: "black"}} />
              {panierCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {panierCount}
                </span>
              )}
            </Link>

            {/* Version “connecté” fixe */}
            <span className="text-dark fw-bold">Bonjour, fallou</span>
            <button onClick={handleOut} className="btn btn-sm btn-danger">Déconnexion</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
