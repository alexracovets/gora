import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './GiftSection.module.scss';
export default function GiftSection() {
    const { t } = useTranslation();

    return (
        <section className={s.gift}>
            <Container>
                <Title>{t("title.gifts")}</Title>

            </Container>
        </section>
    )
}