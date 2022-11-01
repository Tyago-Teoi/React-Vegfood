import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function ComponentName() {
  return (
    <>
      <NavBar></NavBar>
      <section id="welcome" className="section">
        <p id="message">
          Bem-vindo! Somos uma plataforma de delivery de comida 100% vegana.
          Confira os nossos restaurantes parceiros e os seus pratos abaixo.
        </p>
      </section>
      <section
        id="popular-restaurants"
        className="section centered-section mb-5"
      >
        <h1 className="title section-title mb-6">Pratos mais vendidos</h1>
        <div className="columns">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </section>
      <section id="popular-dishes" className="section centered-section mb-5">
        <h1 className="title section-title mb-6">Restaurantes mais famosos</h1>
        <div className="columns">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </section>
      <section id="ingredients" className="section centered-section mb-5">
        <h1 className="title section-title mb-6">Faça você mesmo</h1>
        <div className="columns">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default ComponentName;
