"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Awa Ndiaye",
    text: "Livraison rapide et service client au top ! Je recommande vivement ElectroShop.",
    rating: 5,
    image: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Moussa Diop",
    text: "J'ai acheté un ordinateur ici, très bon rapport qualité/prix. Merci !",
    rating: 4,
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Fatou Sarr",
    text: "Site sérieux, produits authentiques. J'adore mon nouveau téléphone.",
    rating: 5,
    image: "/images/user3.jpg",
  },
  {
    id: 4,
    name: "Aliou Ba",
    text: "Super expérience d'achat, je reviendrai sans hésiter.",
    rating: 5,
    image: "/images/user4.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState<number>(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <div className="container my-5 py-5 position-relative">
      <h2 className="fw-bold text-center mb-4">Ce que disent nos clients</h2>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100 text-center">
            <p className="card-text fst-italic">&quot;{testimonial.text}&quot;</p>
            <div className="d-flex flex-column align-items-center mt-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-circle mb-2"
              />
              <h6 className="mb-0">{testimonial.name}</h6>
              <div className="text-warning small">
                {"★".repeat(testimonial.rating)}{" "}
                <span className="text-muted">({testimonial.rating}/5)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons navigation */}
      <button
        onClick={prevSlide}
        className="btn btn-primary shadow rounded-circle position-absolute top-50 start-0 translate-middle-y p-2 d-flex align-items-center justify-content-center"
        style={{ width: 40, height: 40 }}
      >
        <ChevronLeft size={20} color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="btn btn-primary shadow rounded-circle position-absolute top-50 end-0 translate-middle-y p-2 d-flex align-items-center justify-content-center"
        style={{ width: 40, height: 40 }}
      >
        <ChevronRight size={20} color="white" />
      </button>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`mx-1 rounded-circle ${index === current ? "bg-primary" : "bg-secondary"}`}
            style={{ width: 12, height: 12, border: "none" }}
          />
        ))}
      </div>
    </div>
  );
}
