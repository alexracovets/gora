import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './About.module.scss';
export default function About() {
    const { t } = useTranslation();

    return (
        <section className={s.about}>
            <Container>
                <Title>{t("title.about")}</Title>
            </Container>
        </section >

    )
}