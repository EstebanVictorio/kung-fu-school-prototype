import React from 'react';
import Navbar from 'Presentational/Element/Navbar';
import iDangerousSwiper from 'swiper/dist/js/swiper';
import Swiper from "Presentational/Element/Swiper";

export default class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let swiper = new iDangerousSwiper(document.querySelector('.swiper-container'), {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: document.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: document.querySelector('.swiper-button-next'),
                prevEl: document.querySelector('.swiper-button-prev')
            },
            setWrapperSize: true
        });
    }

    render() {
        return <div className="layout-container">
            <Navbar/>
            <Swiper/>
        </div>;
    }

}
