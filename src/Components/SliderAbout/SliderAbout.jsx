import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";
import { useRef, useState } from 'react';
export default function SliderAbout({ children, length }) {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <SliderArrow isPrev={false} disabled={currentSlide === length - 1} />,
        prevArrow: <SliderArrow isPrev={true} disabled={currentSlide === 0} />,
        afterChange: (index) => {
            setCurrentSlide(index); // Оновлюємо індекс поточного слайда
        }
    };

    return (
        <Slider {...settings} ref={sliderRef}>
            {children}
        </Slider>
    )
}

SliderAbout.propTypes = {
    children: PropTypes.node,
    length: PropTypes.number
};