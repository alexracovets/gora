import { useTranslation } from "react-i18next";

import Title from "../UI/Title/Title";
import DashLine from "../UI/DashLine/DashLine";

import s from './GiftSection.module.scss';
import GiftSlider from "../GiftSlider/GiftSlider";
export default function GiftSection() {
    const { t } = useTranslation();

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
            <GiftSlider slides={slides1} />
            <div className={s.line_wrapper}>
                <DashLine />
                <p className={s.text}>{t("dash_text.available_patron")}</p>
            </div>
            <GiftSlider slides={slides1} available />
        </section>
    )
}