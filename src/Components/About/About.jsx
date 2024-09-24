import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import SliderAbout from "../SliderAbout/SliderAbout";
import SliderItem from "./SliderItem/SliderItem";
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import modalStore from '../../store/modalStore';
import sliderAboutData from "../../data/sliderAboutData";

import s from './About.module.scss';
export default function About() {
    const setIsPayModal = modalStore((state) => state.setIsPayModal);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentMeta, setCurrentMeta] = useState(0);
    const [isHideMeta, setIsHideMeta] = useState(false);
    const { t } = useTranslation();

    const metas = [
        "about.sliderAbout.0.meta",
        "about.sliderAbout.1.meta",
        "about.sliderAbout.2.meta"
    ]

    const changeMeta = (current) => {
        setIsHideMeta(true);
        setTimeout(() => {
            setCurrentMeta(current)
        }, 300);
        setTimeout(() => {
            setIsHideMeta(false);
        }, 400)

    }

    useEffect(() => {
        changeMeta(currentSlide);
    }, [currentSlide])

    return (
        <Container>
            <Title>{t("title.about")}</Title>
            <div className={s.title_desc}>
                <span>Відновлення</span> Першого та Єдиного Україномовного Осередку на Святій Горі Афон
            </div>
            <div className={`${s.mission} ${isHideMeta ? s.hide : ''}`} dangerouslySetInnerHTML={{ __html: t(metas[currentMeta]) }} />
            <div className={s.slider_wrapper}>
                <SliderAbout length={sliderAboutData.length} setCurrent={setCurrentSlide}>
                    {sliderAboutData.map((slide, idx) => <SliderItem key={idx} idx={idx} slide={slide} />)}
                </SliderAbout>
            </div>
            <Button click={() => setIsPayModal(true)}>{t("btn.contribution")}</Button>
        </Container>
    )
}