import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

export default function SliderModal({ children, styleName, onSlideChange }) {

    const settings = {
        className: styleName,
        dots: false,
        centerMode: false, 
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SliderArrow isPrev={false} isProgressModal />,
        prevArrow: <SliderArrow isPrev={true} isProgressModal />,
        beforeChange: (current, next) => { onSlideChange(next) }
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