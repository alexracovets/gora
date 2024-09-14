import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import Item from "./Item/Item";

import patronData from "../../data/patronData";
import patronDataMobile from "../../data/patronDataMobile";

import s from './Patron.module.scss';
export default function Patron() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const updateData = () => {
            if (window.innerWidth <= 430) {
                setData(patronDataMobile);
            } else {
                setData(patronData);
            }
        };

        updateData();

        window.addEventListener('resize', updateData);

        return () => {
            window.removeEventListener('resize', updateData);
        };
    }, []);

    return (
        <section className={s.patron}>
            <Container>
                <Title>{t("title.patron")}</Title>
                <div className={s.patron_type}>
                    {data.map((item, idx) => {
                        return <Item key={idx} item={item} idx={idx} />
                    })}
                </div>
            </Container>
        </section>
    )
}