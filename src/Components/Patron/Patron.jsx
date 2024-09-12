import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import Item from "./Item/Item";

import s from './Patron.module.scss';
export default function Patron() {
    const { t } = useTranslation();

    const patronData = [
        {
            title: 'patron.0.title',
            texts: [
                'patron.0.texts.0'
            ]
        },
        {
            title: 'patron.1.title',
            texts: [
                'patron.1.texts.0'
            ]
        },
        {
            title: 'patron.2.title',
            texts: [
                'patron.2.texts.0'
            ],
            patrons: [
                {
                    name: "Патронат «хранитель»",
                    price: "€1.500.000"
                },
                {
                    name: "Патронат «відбудовник»",
                    price: "€800.000"
                },
                {
                    name: "Патронат «живитель»",
                    price: "€600.000"
                },
                {
                    name: "Патронат «Бережич»",
                    price: "€100.000"
                }
            ],
            secondText: [
                'patron.2.texts.1'
            ]
        },
        {
            title: 'patron.3.title',
            texts: [
                'patron.3.texts.0',
                'patron.3.texts.1'
            ]
        }
    ]

    return (
        <section className={s.patron}>
            <Container>
                <Title>{t("title.patron")}</Title>
                <div className={s.patron_type}>
                    {patronData.map((item, idx) => {
                        return <Item key={idx} item={item} />
                    })}
                </div>
            </Container>
        </section>
    )
}