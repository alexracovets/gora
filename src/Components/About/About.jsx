import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import s from './About.module.scss';
import SliderAbout from "../SliderAbout/SliderAbout";
export default function About() {
    const { t } = useTranslation();

    return (
        <section className={s.about}>
            <Container>
                <Title>{t("title.about")}</Title>
                <SliderAbout />
                <Button>{t("btn.contribution")}</Button>
            </Container>
        </section >

    )
}