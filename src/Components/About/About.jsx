import { useTranslation } from "react-i18next";

import SliderAbout from "../SliderAbout/SliderAbout";
import SliderItem from "./SliderItem/SliderItem";
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import modalStore from '../../store/modalStore';
import sliderAboutData from "../../data/sliderAboutData";

import s from './About.module.scss';
export default function About() {
    const { t } = useTranslation();
    const setIsPayModal = modalStore((state) => state.setIsPayModal);

    return (
        <section className={s.about} id="about">
            <Container>
                <Title>{t("title.about")}</Title>
                <article className={s.mission}>
                    <p className={s.title}>{t("about.mission")}</p>
                    <div className={s.text}>{t("about.mission_desc")}</div>
                </article>
                <div className={s.slider_wrapper}>
                    <SliderAbout length={sliderAboutData.length}>
                        {sliderAboutData.map((slide, idx) => <SliderItem key={idx} idx={idx} slide={slide} />)}
                    </SliderAbout>
                </div>
                <Button click={() => setIsPayModal(true)}>{t("btn.contribution")}</Button>
            </Container>
        </section >

    )
}