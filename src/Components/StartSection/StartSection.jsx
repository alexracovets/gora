import { useTranslation } from "react-i18next";

import BackgroundPattern from "../UI/BackgroundPattern/BackgroundPattern";
import Container from "../Container/Container";
import DashLine from "../UI/DashLine/DashLine";
import Button from "../UI/Button/Button";

import s from './StartSection.module.scss';
export default function StartSection() {
    const { t } = useTranslation();

    return (
        <section className={s.first}>
            <BackgroundPattern />
            <Container>
                <h1 className={s.title}>{t("firstSection.gathering")}</h1>
                <p className={s.we_are}>{t("firstSection.we_are")}</p>
                <DashLine />
                <div className={s.help}>
                    <p>{t("firstSection.help.0")}</p>
                    <p>{t("firstSection.help.1")}</p>
                </div>
                <Button>{t("btn.more")}</Button>
            </Container>
        </section >

    )
}