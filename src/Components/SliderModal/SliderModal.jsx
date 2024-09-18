import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

export default function SliderModal({ children, styleName, onSlideChange }) {

    const settings = {
        className: styleName,
        dots: false,
        centerMode: false,
        arrows: true,
        variableWidth: true,
        nextArrow: <SliderArrow isPrev={false} isProgressModal />,
        prevArrow: <SliderArrow isPrev={true} isProgressModal />,
        beforeChange: (current, next) => { onSlideChange(next) },
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
    );
}

SliderModal.propTypes = {
    styleName: PropTypes.string,
    children: PropTypes.node,
    onSlideChange: PropTypes.func
};