import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import Slider from "react-slick";

import Title from "../UI/Title/Title";
import DashLine from "../UI/DashLine/DashLine";
import SliderArrow from "../UI/SliderArrow/SliderArrow";

import s from './GiftSection.module.scss';
export default function GiftSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useTranslation();
    const sliderRef = useRef();
    const settings = {
        className: s.gift_slider,
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slide: null,
        dots: false,
        variableWidth: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        nextArrow: <SliderArrow isBottom />,
        prevArrow: <SliderArrow isPrev isBottom />
    };

    const slides1 = [
        {
            name: "gift.huge.0.name",
            price: "gift.huge.0.price",
            number: 2
        },
        {
            name: "gift.huge.0.name",
            price: "gift.huge.0.price",
            number: 2
        },
        {
            name: "gift.huge.0.name",
            price: "gift.huge.0.price",
            number: 2
        },
        {
            name: "gift.huge.0.name",
            price: "gift.huge.0.price",
            number: 2
        }
    ]

    return (
        <section className={s.gift}>
            <Title>{t("title.gifts")}</Title>
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.huge_patron")}</p>
            </div>
            <Slider inert="true"
                ref={sliderRef}
                {...settings}
            >
                {slides1.map((slide, idx) => {
                    const totalSlides = slides1.length;
                    const isActive = currentSlide === idx;
                    const isSecondLeft = currentSlide === 0 ? idx === totalSlides - 1 : idx === currentSlide - 1;
                    const isSecondRight = currentSlide === totalSlides - 1 ? idx === 0 : idx === currentSlide + 1;
                    const isThirdLeft = currentSlide === 0 ? idx === totalSlides - 2 : idx === currentSlide - 2;
                    const isThirdRight = currentSlide === totalSlides - 2 ? idx === 0 : idx === currentSlide + 2;

                    return (
                        <div
                            key={idx}
                            className={`${s.item} ${isActive && s.active} ${(isSecondLeft || isSecondRight) && s.second} ${(isThirdLeft || isThirdRight) && s.third}`}
                            data-index={idx}
                        >
                            <div className={s.dot}>
                                <p>{slide.number}/</p>
                                <span>25</span>
                            </div>
                            <div className={s.item_wrapper}>
                                <div className={s.name} dangerouslySetInnerHTML={{ __html: t(slide.name) }} />
                                <div className={s.price} dangerouslySetInnerHTML={{ __html: t(slide.price) }} />
                                <button> {t("btn.contribution")} </button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}