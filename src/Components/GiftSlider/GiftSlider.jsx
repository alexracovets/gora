import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

import s from './GiftSlider.module.scss';
export default function GiftSlider({ slides, available }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useTranslation();
    const sliderRef = useRef();

    const settings = {
        className: s.slider,
        centerMode: true,
        dots: false,
        variableWidth: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        nextArrow: <SliderArrow isBottom />,
        prevArrow: <SliderArrow isPrev isBottom />
    };

    return (
        <div className={s.slider_wrapper}>
            <Slider inert="true"
                ref={sliderRef}
                {...settings}
            >
                {slides.map((slide, idx) => {
                    const totalSlides = slides.length;
                    const isActive = currentSlide === idx;
                    const isSecondLeft = currentSlide === 0 ? idx === totalSlides - 1 : idx === currentSlide - 1;
                    const isSecondRight = currentSlide === totalSlides - 1 ? idx === 0 : idx === currentSlide + 1;
                    const isThirdLeft = currentSlide === 0 ? idx === totalSlides - 2 : idx === currentSlide - 2;
                    const isThirdRight = currentSlide === totalSlides - 2 ? idx === 0 : idx === currentSlide + 2;

                    return (
                        <div
                            key={idx}
                            className={`${s.item} ${isActive && s.active} ${(isSecondLeft || isSecondRight) && s.second} ${(isThirdLeft || isThirdRight) && s.third} ${available && s.available}`}
                            data-index={idx}
                        >
                            <div className={s.dot}>{slide.number}/<span>25</span></div>
                            <div className={s.item_wrapper}>
                                <div className={s.name} dangerouslySetInnerHTML={{ __html: t(slide.name) }} />
                                <div className={s.price} dangerouslySetInnerHTML={{ __html: t(slide.price) }} />
                                <button> {t("btn.contribution")} </button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

GiftSlider.propTypes = {
    slides: PropTypes.object,
    available: PropTypes.bool
}; 