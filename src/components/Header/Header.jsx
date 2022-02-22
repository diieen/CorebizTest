import "./header.scss"
import logo from "../../img/logo-corebiz-preto-cinza.png"
import React, { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Header() {
    const [items, setItems] = useState();

    useEffect(() => {
        let items = localStorage.getItem("quantity-cart")

        items ?
            setItems(items)
        :
            setItems(0)
    }, [])

    return (
        <header>
            <div className="container">
                <BrowserView>
                    <div className="header-box">
                        <div className="logo-box">
                            <img src={logo} alt="Corebiz Logo" />
                        </div>
                        <div className="header-block-right">
                            <div className="block-form">
                                <input type="text" className="search" placeholder="O que está procurando?"/>
                                <button className="btn-search"></button>
                            </div>
                            <div className="my-account-header">
                                <a href="#">
                                    <i className="person-icon"></i>
                                    <p>Minha Conta</p>
                                </a>
                            </div>
                            <div className="cart-icon-box">
                                <i className="cart-icon"></i>
                                <p id="quantity-cart">{items}</p>
                            </div>
                        </div>
                    </div>
                </BrowserView>

                <MobileView>
                    <div className="top-header-mobile">
                        <div className="menu-box">
                            <i className="menu-icon"></i>
                        </div>
                        <div className="logo-box">
                            <img src={logo} alt="Corebiz Logo" />
                        </div>
                        <div className="cart-icon-box">
                            <i className="cart-icon"></i>
                            <p id="quantity-cart">{items}</p>
                        </div>
                    </div>
                </MobileView>
            </div>
        </header>
    )
}