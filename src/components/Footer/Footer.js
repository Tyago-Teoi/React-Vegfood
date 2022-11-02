import "./Footer.css";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer mt-6 pb-6 has-text-centered">
      <div className="tile is-ancestor">
        <div className="tile is-2 is-parent">
          <div className="tile is-child is-flex is-justify-content-center">
            <figure className="is-flex is-align-items-center image is-128x128">
              <img
                src="http://localhost:3000/logo-footer.png"
                alt="Logo da VegFood"
              ></img>
            </figure>
          </div>
        </div>
        <div className="has-text-centered tile is-vertical is-parent">
          <div className="tile pd-3">
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">Sobre Nós</a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">Trabalhe Conosco</a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">Cadastre seu Restaurante</a>
            </div>
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <a href="/" className="page-link">Fale Conosco</a>
            </div>
          </div>
          <div className="tile">
            <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
              <p className="copyright">© Copyright {currYear} - VegFood</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
