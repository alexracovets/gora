import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './GiftSection.module.scss';
import DashLine from "../UI/DashLine/DashLine";
export default function GiftSection() {
    const { t } = useTranslation();

    return (
        <section className={s.gift}>
            <Container>
                <Title>{t("title.gifts")}</Title>
                <div className={s.line_wrapper}>
                    <DashLine />
                    <p className={s.text}>{t("dash_text.huge_patron")}</p>
                </div>
                <div className={s.slider}>
                    <div className={s.item}>
                        <div className={s.item_wrapper}>
                            <div className={s.name}>
                                Покровительство
                            </div>
                            <div className={s.price}>
                                за <span>€500.000</span>
                            </div>
                            <button> зробити внесок  </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}