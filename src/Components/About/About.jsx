import { useTranslation } from "react-i18next";

import SliderAbout from "../SliderAbout/SliderAbout";
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import s from './About.module.scss';
export default function About() {
    const { t } = useTranslation();

    return (
        <section className={s.about} id="about">
            <Container>
                <Title>{t("title.about")}</Title>
                <SliderAbout />
                <Button>{t("btn.contribution")}</Button>
            </Container>
        </section >

    )
}