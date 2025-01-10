import React from "react";
import OwlCarousel from "react-owl-carousel";
import '../scss/carousel-custom.scss'

export default function Examplecarousel() {
    const carouseProps = {
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoWidth: true,
        nav: 0,
        autoWidth: 0,
        responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 2.5 } }
    };

    return (

        <OwlCarousel className='owl-theme' {...carouseProps}>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </OwlCarousel>

    );
}
