import React from 'react';

function Swiper() {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <img className='swiper-slide' src="./Res/exam.jpg"/>
                <img className='swiper-slide' src="./Res/exam.jpg"/>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}

export default Swiper;