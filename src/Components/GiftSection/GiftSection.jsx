import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Title from "../UI/Title/Title";
import DashLine from "../UI/DashLine/DashLine";
import GiftSlider from "../GiftSlider/GiftSlider";

import s from './GiftSection.module.scss';

export default function GiftSection() {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430)
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const updateData = () => {
            if (window.innerWidth <= 430) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        };

        updateData();

        window.addEventListener('resize', updateData);

        return () => {
            window.removeEventListener('resize', updateData);
        };
    }, []);

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
            <Title>{isDesktop ? t("title.gifts") : t("title.gifts_mobile")}</Title>
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.huge_patron")}</p>
            </div>
            <div className={s.slider_wrapper}>
                <GiftSlider setCurrentSlide={setCurrentSlide} styleName={s.slider} >
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
                                <div className={s.dot}>{slide.number}/<span>25</span></div>
                                <div className={s.item_wrapper}>
                                    <div className={s.name} dangerouslySetInnerHTML={{ __html: t(slide.name) }} />
                                    <div className={s.price} dangerouslySetInnerHTML={{ __html: t(slide.price) }} />
                                    <button> {t("btn.contribution")} </button>
                                </div>
                            </div>
                        )
                    })}
                </GiftSlider>
            </div>
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.available_patron")}</p>
            </div>
            <div className={s.slider_wrapper}>
                <GiftSlider setCurrentSlide={setCurrentSlide} styleName={s.slider} >
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
                                className={`${s.item} ${isActive && s.active} ${(isSecondLeft || isSecondRight) && s.second} ${(isThirdLeft || isThirdRight) && s.third} ${s.available}`}
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
                </GiftSlider>
            </div>
        </section>
    )
}