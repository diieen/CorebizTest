import "./banner.scss";
import banner from "../../img/banner-1.png";
import Slider from "react-slick";

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
            <Slider {...settings}>
                <img src={banner} alt="" />
                <img src={banner} alt="" />
                <img src={banner} alt="" />
                <img src={banner} alt="" />
            </Slider>
        </div>
    )
}