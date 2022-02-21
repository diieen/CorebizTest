import "./shelf.scss";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import Slider from "react-slick";

export default function Shelf() {
    const [products, setProducts] = useState([{}]);
    const settingsShelf = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false
    };

    const HandleStars = ({stars}) => {
        let starsArray = [];
        for (let i = 0; i < 5; i++) {
            starsArray.push(
                (i < stars) ? <i className="star-icon-active"></i> : <i className="star-icon"></i>
            );
        }
        return starsArray;
    }

    const addItemCart = () => {
        let items = parseInt(localStorage.getItem("quantity-cart"))
        items ?
            items = items + 1
        :
            items = 1
        
        localStorage.setItem("quantity-cart", items);
        document.querySelector("#quantity-cart").innerHTML = items;
    }

    useEffect(() => {
        api
          .get("/products")
          .then((response) => setProducts(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className="container">
            <div className="shelf-container">
                <h2 className="shelf-title">
                    Mais Vendidos
                    <div></div>
                </h2>
                <div className="shelf-slider-container">
                    <Slider {...settingsShelf}>
                        {
                            products.map((product) => (
                                <div className="shelf-item">
                                    <div className="product-image-box">
                                        {
                                            product.listPrice && (
                                                <i className="promotion-flag"></i>
                                            )
                                        }
                                        <img src={product.imageUrl} alt={product.productName} />
                                    </div>
                                    <div className="product-name-box">
                                        <p className="product-name">{product.productName}</p>
                                    </div>
                                    <div className="product-stars-box">
                                        { <HandleStars stars={product.stars} /> }
                                    </div>
                                    <div className="product-prices-box">
                                        <div className="product-list-price">
                                            {
                                                product.listPrice && (
                                                    <p>
                                                        de R$ {parseFloat(product.listPrice*10**-2).toFixed(2).replace(".", ",")}
                                                    </p>
                                                )
                                            }
                                        </div>
                                        <div className="product-price">
                                            <p>
                                                por R$ {parseFloat(product.price*10**-2).toFixed(2).replace(".", ",")}
                                            </p>
                                        </div>
                                        <div className="product-installments">
                                            {
                                                product.installments?.length > 0 && (
                                                    <p>
                                                        ou em {product.installments[0].quantity}x de R$ {parseFloat(product.installments[0].value*10**-2).toFixed(2).replace(".", ",")}
                                                    </p>
                                                )
                                            }
                                        </div>
                                        <div className="product-buy-btn-box">
                                            <button onClick={addItemCart}>
                                                COMPRAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}