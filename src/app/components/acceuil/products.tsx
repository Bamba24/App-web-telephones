// src/app/components/PopularProducts.tsx
import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Smartphone Galaxy S21",
    price: 799.99,
    rating: 4.5,
    inStock: true,
    image: "/images/smartphone.jpg", // Remplace par l'image appropriée
  },
  {
    id: 2,
    name: "Iphone 14",
    price: 1099.99,
    rating: 4.2,
    inStock: false,
    image: "/images/Iphones/iphone_14.jpg", // Remplace par l'image appropriée
  },
  {
    id: 3,
    name: "Casque Bluetooth Sony",
    price: 129.99,
    rating: 4.8,
    inStock: true,
    image: "/images/casques/Casque_Bose_700.jpeg", // Remplace par l'image appropriée
  },
];

export default function PopularProducts() {
  return (
    <div className="container my-5 py-5">
      <h2 className=" mb-4">Les produits les plus populaires</h2>
      <div className="row g-4 mt-2">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow-sm border-light rounded">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="card-img-top rounded-3"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <strong>${product.price.toFixed(2)}</strong>
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    {/* Rating en étoiles */}
                    <span className="text-warning">
                      {"★".repeat(Math.floor(product.rating))}
                      {product.rating % 1 !== 0 && "☆"}
                    </span>
                    <span className="text-muted">({product.rating.toFixed(1)})</span>
                  </div>
                  <div>
                    {/* Stock */}
                    {product.inStock ? (
                      <span className="badge bg-success">En stock</span>
                    ) : (
                      <span className="badge bg-danger">Rupture</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
