import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { FormattedMessage } from "react-intl";
import "./Home.css";

function Home(props) {
  return (
    <>
      <NavBar
        currentLocale={props.currentLocale}
        handleLocaleChange={props.handleLocaleChange}
      ></NavBar>
      <section id="welcome" className="section">
        <p id="message">
          <FormattedMessage id="home.welcome" />
        </p>
      </section>
      <section
        id="popular-restaurants"
        className="section centered-section mb-5"
      >
        <h1 className="title section-title mb-6">
          <FormattedMessage id="home.dishes-header" />
        </h1>
        <div className="columns is-multiline">
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
          <div className="column is-12-mobile is-2-desktop is-4-tablet">
            <Card className="centered-card"/>
          </div>
        </div>
      </section>
      <section id="popular-dishes" className="section centered-section mb-5">
        <h1 className="title section-title mb-6">
          <FormattedMessage id="home.restaurants-header" />
        </h1>
        <div className="columns is-multiline">
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
        </div>
      </section>
      <section id="ingredients" className="section centered-section mb-5">
        <h1 className="title section-title mb-6">
          <FormattedMessage id="home.ingredients-header" />
        </h1>
        <div className="columns is-multiline">
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
          <div className="column is-2-desktop is-4-tablet">
            <Card />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Home;
