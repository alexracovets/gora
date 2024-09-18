import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Title from "../UI/Title/Title";
import DashLine from "../UI/DashLine/DashLine";
import GiftSlider from "../GiftSlider/GiftSlider";

import availableGiftsData from "../../data/availableGiftsData";
import hugeGiftsData from "../../data/hugeGiftsData";
import SliderItem from "./SliderItem/SliderItem";

import s from './GiftSection.module.scss';
export default function GiftSection() {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430)
    const [currentSlide1, setCurrentSlide1] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);

    useEffect(() => {
        const updateData = () => {
            setIsDesktop(window.innerWidth > 430);
        };
        updateData();

        window.addEventListener('resize', updateData);
        return () => {
            window.removeEventListener('resize', updateData);
        };
    }, []);

    return (
        <section className={s.gift} id="gifts">
            <Title>{isDesktop ? t("title.gifts") : t("title.gifts_mobile")}</Title>
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.huge_patron")}</p>
            </div>
            <div className={s.slider_wrapper}>
                <GiftSlider setCurrentSlide={setCurrentSlide1} styleName={s.slider} >
                    {hugeGiftsData.map((slide, idx) => <SliderItem
                        key={idx}
                        index={idx}
                        slide={slide}
                        currentSlide={currentSlide1}
                        totalSlides={hugeGiftsData.length}
                    />)}
                </GiftSlider>
            </div>
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.available_patron")}</p>
            </div>
            <div className={s.slider_wrapper}>
                <GiftSlider setCurrentSlide={setCurrentSlide2} styleName={s.slider} >
                    {availableGiftsData.map((slide, idx) => <SliderItem
                        key={idx}
                        index={idx}
                        slide={slide}
                        currentSlide={currentSlide2}
                        totalSlides={availableGiftsData.length}
                        plusClases={s.available}
                    />)}
                </GiftSlider>
            </div>
        </section>
    )
}