import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";
import { useEffect, useRef, useState } from 'react';
export default function SliderAbout({ children, length, setCurrent }) {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <SliderArrow isPrev={false} disabled={currentSlide === length - 1} />,
        prevArrow: <SliderArrow isPrev={true} disabled={currentSlide === 0} />,
        afterChange: (index) => {
            setCurrentSlide(index); // Оновлюємо індекс поточного слайда
        }
    };

    useEffect(() => {
        setCurrent(currentSlide)
    }, [setCurrent, currentSlide])

    return (
        <Slider {...settings} ref={sliderRef}>
            {children}
        </Slider>
    )
}

SliderAbout.propTypes = {
    children: PropTypes.node,
    length: PropTypes.number,
    setCurrent: PropTypes.func
};