import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './Patron.module.scss';
import Item from "./Item/Item";
export default function Patron() {
    const { t } = useTranslation();

    return (
        <Container>
            <Title>{t("title.patron")}</Title>
            <div className={s.patron_type}>
                <Item />
            </div>
        </Container>
    )
}