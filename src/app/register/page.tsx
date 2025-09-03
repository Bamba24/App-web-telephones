"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "mui-sonner";
import axios from "axios";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [nom, setNom] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axios.post("/api/register", { nom, email, motDePasse });
      toast.success("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      router.push("/login");
    } catch (error) {
      console.log("Inscription failed", error);
      toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 shadow rounded-4 overflow-hidden" style={{ maxWidth: "960px" }}>
        
        {/* Bloc gauche : Image desktop */}
        <div className="col-12 col-md-6 p-0 d-none d-md-block">
          <Image
            src="/images/background-hero.jpg"
            alt="Image de connexion"
            width={600}
            height={600}
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Bloc droit : Formulaire */}
        <div className="col-12 col-md-6 bg-white p-4 p-md-5 d-flex flex-column justify-content-center">
          <h2 className="mb-4 fw-bold text-primary text-center text-md-start">S&apos;inscrire</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Votre nom"
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="votre@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="••••••••"
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">S&apos;inscrire</button>
            </div>
          </form>

          <div className="mt-4 text-center text-md-start">
            <p>
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-decoration-none">Connectez-vous</a>
            </p>
            <a href="/forgot-password" className="text-decoration-none">Mot de passe oublié ?</a>
          </div>
        </div>

        {/* Image mobile en bas */}
        <div className="col-12 d-md-none p-0 mt-3">
          <Image
            src="/images/background-hero.jpg"
            alt="Image de connexion"
            width={600}
            height={300}
            className="w-100 h-auto object-fit-cover rounded-bottom"
          />
        </div>

      </div>
    </div>
  );
}
