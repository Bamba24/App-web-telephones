"use client";
import React from "react";
import { SiSamsung, SiApple, SiHp, SiDell } from "react-icons/si";

const partners = [
  { name: "Samsung", Icon: SiSamsung },
  { name: "Apple", Icon: SiApple },
  { name: "HP", Icon: SiHp },
  { name: "Dell", Icon: SiDell },
];

export default function Partners() {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Nos partenaires de confiance</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4 align-items-center">
          {partners.map(({ name, Icon }) => (
            <div key={name} title={name} className="p-2">
              <Icon size={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
