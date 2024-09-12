import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import Item from "./Item/Item";

import patronData from "../../data/patronData";

import s from './Patron.module.scss';
export default function Patron() {
    const { t } = useTranslation();

    return (
        <section className={s.patron}>
            <Container>
                <Title>{t("title.patron")}</Title>
                <div className={s.patron_type}>
                    {patronData.map((item, idx) => {
                        return <Item key={idx} item={item} idx={idx} />
                    })}
                </div>
            </Container>
        </section>
    )
}