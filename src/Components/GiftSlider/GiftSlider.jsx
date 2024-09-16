import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

export default function GiftSlider({ children, setCurrentSlide, styleName }) {

    const settings = {
        className: styleName,
        centerMode: true,
        dots: false,
        variableWidth: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        nextArrow: <SliderArrow isPrev={false} isBottom />,
        prevArrow: <SliderArrow isPrev={true} isBottom />,
        responsive: [
            {
                breakpoint: 431,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    };

    return (
        <Slider inert="true" {...settings} >
            {children}
        </Slider>
    )
}

GiftSlider.propTypes = {
    children: PropTypes.array,
    setCurrentSlide: PropTypes.func,
    styleName: PropTypes.string
};