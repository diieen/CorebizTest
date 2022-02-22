import "./newsletter.scss";
import api from "../services/api";

export default function Newsletter() {

    const sendNewsletter = () => {
        var nameNews = document.querySelector("#name").value;
        var emailNews = document.querySelector("#email").value;

        if (!nameNews || !emailNews) {
            alert("Preencha todos os campos!");
        } else if (!emailNews.includes("@")) {
            alert("Email inválido!");
        } else {
            api
            .post("/newsletter", {
                "email": emailNews,
                "name": nameNews
            })
            .then((response) => alert("Enviado com sucesso!"))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }
    }

    return (
        <div className="newsletter-container">
            <div className="container">
                <h3 className="title-newsletter">Participe de nossas news com promoções e novidades!</h3>
                <div className="block-form-newsletter">
                    <input type="text" id="name" placeholder="Digite seu nome" />
                    <input type="text" id="email" placeholder="Digite seu email" />
                    <button className="btn-newsletter" onClick={sendNewsletter}>Eu quero!</button>
                </div>
            </div>
        </div>
    )
}