import "./banner.scss";
import banner from "../../img/banner-1.png";
import bannerMobile from "../../img/banner-2.png";
import Slider from "react-slick";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function bannerC() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false
    };

    return (
        <div className="banner-container">
            <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <BrowserView>
                <Slider {...settings}>
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                </Slider>
            </BrowserView>
            <MobileView>
                <Slider {...settings}>
                    <img src={bannerMobile} alt="" />
                    <img src={bannerMobile} alt="" />
                    <img src={bannerMobile} alt="" />
                    <img src={bannerMobile} alt="" />
                </Slider>
            </MobileView>
        </div>
    )
}