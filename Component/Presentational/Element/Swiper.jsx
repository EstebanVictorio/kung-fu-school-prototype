import React from 'react';
import PropTypes from 'prop-types';
import iDangerousSwiper from 'swiper/dist/js/swiper.min';
class Swiper extends React.Component{
    state = {};
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.setState({swiper: new iDangerousSwiper(`.${this.props.swiperName}`,this.props.swiperOpts)});
    }

    render() {
        return (
            <div className={`${this.props.swiperName} swiper-container`}>
                <div className="swiper-wrapper">
                    {this.props.slides}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        );
    }
}

Swiper.propTypes = {
    swiperName: PropTypes.string.isRequired,
    slides: PropTypes.array.isRequired,
    swiperOpts: PropTypes.object,
};

export default Swiper;