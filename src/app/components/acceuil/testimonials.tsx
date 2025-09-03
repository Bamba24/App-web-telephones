// src/app/components/Testimonials.tsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Awa Ndiaye",
    text: "Livraison rapide et service client au top ! Je recommande vivement ElectroShop.",
    rating: 5,
    image: "/images/background-hero.jpg",
  },
  {
    id: 2,
    name: "Moussa Diop",
    text: "J'ai acheté un ordinateur ici, très bon rapport qualité/prix. Merci !",
    rating: 4,
    image: "/images/background-hero.jpg",
  },
  {
    id: 3,
    name: "Fatou Sarr",
    text: "Site sérieux, produits authentiques. J'adore mon nouveau téléphone.",
    rating: 5,
    image: "/images/background-hero.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 2) % testimonials.length);
  };

  // On récupère les 2 témoignages visibles
  const visibleSlides = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <div className="container my-5 py-5 position-relative">
      <h2 className="fw-bold text-center mb-4">Ce que disent nos clients</h2>

      <div className="row justify-content-center g-4">
        {visibleSlides.map((testimonial) => (
          <div key={testimonial.id} className="col-md-5">
            <div className="card shadow-sm border-0 p-4 h-100">
              <div className="card-body">
                <p className="card-text fst-italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">{testimonial.name}</h6>
                    <div className="text-warning small">
                      {"★".repeat(testimonial.rating)}{" "}
                      <span className="text-muted">
                        ({testimonial.rating}/5)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons navigation avec icônes */}
      <button
        onClick={prevSlide}
        className="btn btn-light shadow rounded-circle position-absolute top-50 start-0 translate-middle-y"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="btn btn-light shadow rounded-circle position-absolute top-50 end-0 translate-middle-y"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
