import "./footer.scss";

export default function footer() {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-box">
                    <div className="location-box">
                        <p className="title-location">Localização</p>
                        <div className="spacer-footer"></div>
                        <p className="location-infos">
                            Avenida Andrômeda, 2000. Bloco 6 e 8 <br /> Alphavile SP <br /> brasil@corebiz.ag <br /> +55 11 3090 1039
                        </p>
                    </div>
                    <div className="btns-footer-box">
                        <button className="contact-us">
                            <i className="message-icon"></i>
                            ENTRE EM CONTATO
                        </button>
                        <button className="online-contact">
                            <i className="headset-icon"></i>
                            FALE COM O NOSSO CONSULTOR ONLINE
                        </button>
                    </div>
                    <div className="footer-logos-box">
                        <div className="developed-by">
                            <p>Created by</p>
                            <i className="corebiz-logo"></i>
                        </div>
                        <i className="vtex-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}