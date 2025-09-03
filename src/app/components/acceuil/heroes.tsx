"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
  return (
    <div className="container mt-5 pt-7 pb-7">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow-sm">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-md-row align-items-center p-5 bg-light">
              <div className="text-center text-md-start flex-grow-1">
                <h1 className="display-5 fw-bold">Bienvenue chez ElectroShop</h1>
                <p className="fs-4">
                  Découvrez les dernières technologies mobiles et informatiques.
                  Livraison rapide et service client garanti.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <Link href="/telPage" className="btn btn-primary btn-lg">Voir les produits</Link>
                </div>
              </div>
              <div className="d-none d-md-block ms-md-5">
                <Image
                  src="/images/background-hero.jpg"
                  alt="Produits électroniques"
                  width={300}
                  height={300}
                  className="rounded shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center p-5 bg-light">
              <div className="text-center text-md-start flex-grow-1">
                <h1 className="display-5 fw-bold">Nouveaux modèles disponibles</h1>
                <p className="fs-4">
                  Téléphones haut de gamme et ordinateurs puissants en stock !
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <button className="btn btn-success btn-lg">Découvrir</button>
                </div>
              </div>
              <div className="d-none d-md-block ms-md-5">
                <Image
                  src="/images/background-hero.jpg"
                  alt="Ordinateur"
                  width={300}
                  height={300}
                  className="rounded shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center p-5 bg-light">
              <div className="text-center text-md-start flex-grow-1">
                <h1 className="display-5 fw-bold">Accessoires de qualité</h1>
                <p className="fs-4">
                  Chargeurs, écouteurs, clés USB et bien plus encore.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <button className="btn btn-warning btn-lg">Voir les accessoires</button>
                </div>
              </div>
              <div className="d-none d-md-block ms-md-5">
                <Image
                  src="/images/background-hero.jpg"
                  alt="Accessoires"
                  width={300}
                  height={300}
                  className="rounded shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Contrôles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span style={{backgroundColor: "gray", opacity: 0.4}} className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span style={{backgroundColor: "gray", opacity: 0.4}} className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
}
