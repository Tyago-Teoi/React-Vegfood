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
      <section id="popular-restaurants" className="section"></section>
      <section id="popular-dishes" className="section"></section>
      <section id="ingredients" className="section"></section>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default ComponentName;
