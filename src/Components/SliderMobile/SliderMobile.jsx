import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

export default function SliderMobile({ children, styleName, onSlideChange }) {

    const settings = {
        className: styleName,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        nextArrow: <SliderArrow isPrev={false} />,
        prevArrow: <SliderArrow isPrev={true} />,
        beforeChange: (current, next) => { current === -1 ? null : onSlideChange(next) },
        responsive: [
            {
                breakpoint: 431,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: false,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

SliderMobile.propTypes = {
    onSlideChange: PropTypes.func,
    styleName: PropTypes.string,
    children: PropTypes.node
};