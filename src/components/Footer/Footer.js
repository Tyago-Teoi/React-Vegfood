import './Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <img src="/imgs/logo-footer.png" alt="Logo da VegFood" className="logo"></img>

            <div className="footer-text-container">
                <div className="page-title-container">
                    <p className="page-title">Sobre Nós</p>
                    <p className="page-title">Trabalhe Conosco</p>
                    <p className="page-title">Cadastre seu Restaurante</p>
                    <p className="page-title">Fale Conosco</p>
                </div>
            
                <p className="copyright">© Copyright 2022 - VegFood</p>
            </div>
        </footer>
    ) 
    
}

export default Footer;