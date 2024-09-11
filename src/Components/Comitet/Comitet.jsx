import { useTranslation } from "react-i18next";

import Title from "../UI/Title/Title";
import Container from "../Container/Container";

import s from './Comitet.module.scss';
export default function Comitet() {
    const { t } = useTranslation();

    const comitetData = [
        {
            image: "0.png",
            name: "comitet.0.name",
            position: "comitet.0.position",
        },
        {
            image: "1.png",
            name: "comitet.1.name",
            position: "comitet.1.position",
        },
        {
            image: "2.png",
            name: "comitet.2.name",
            position: "comitet.2.position",
        },
        {
            image: "3.png",
            name: "comitet.3.name",
            position: "comitet.3.position",
        },
        {
            image: "4.png",
            name: "comitet.4.name",
            position: "comitet.4.position",
        },
        {
            image: "5.png",
            name: "comitet.5.name",
            position: "comitet.5.position",
        }
    ]

    return (
        <section className={s.comitet}>
            <Container>
                <Title>{t("title.comitet")}</Title>
                <div className={s.comitet_wrapper}>
                    {comitetData.map((person, idx) => {
                        return (
                            <div key={idx} className={s.item}>
                                <div className={s.photo} style={{ backgroundImage: `url(./img/comitet/${person.image})` }} />
                                <div className={s.name} dangerouslySetInnerHTML={{ __html: t(person.name) }} />
                                <div className={s.position} dangerouslySetInnerHTML={{ __html: t(person.position) }} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}