import React from 'react';
import Navbar from 'Presentational/Element/Navbar';
import Swiper from "Presentational/Element/Swiper";

export default class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    getSlides(){
        return [
            <div className="swiper-slide" key={1}>
                <img src='./public/img/banner/1.jpg'/>
            </div>,
            <div className="swiper-slide" key={2}>
                <img src='./public/img/banner/2.jpg'/>
            </div>
        ];
    }

    componentDidMount() {

    }

    render() {
        return <div className="layout-container">
            <Navbar/>
            <Swiper swiperName='banner-swiper' slides={this.getSlides()} swiperOpts={{centeredSlides:true}}/>
        </div>;
    }

}
