import { useTranslation } from "react-i18next";

import Title from "../UI/Title/Title";
import Container from "../Container/Container";

import s from './Comitet.module.scss';
import comitetData from "../../data/comitetData";
export default function Comitet() {
    const { t } = useTranslation();

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