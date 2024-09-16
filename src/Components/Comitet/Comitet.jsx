import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Title from "../UI/Title/Title";
import Container from "../Container/Container";
import comitetData from "../../data/comitetData";
import SliderMobile from "../SliderMobile/SliderMobile";

import s from './Comitet.module.scss';
export default function Comitet() {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430)

    useEffect(() => {
        const updateData = () => {
            if (window.innerWidth <= 430) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        };

        updateData();

        window.addEventListener('resize', updateData);

        return () => {
            window.removeEventListener('resize', updateData);
        };
    }, []);

    return (
        <section className={s.comitet} id="comitet">
            <Container>
                <Title>{t("title.comitet")}</Title>
                {isDesktop ?
                    <div className={s.comitet_wrapper}>
                        {
                            comitetData.map((person, idx) => {
                                return (
                                    <div key={idx} className={s.item}>
                                        <div className={s.photo} style={{ backgroundImage: `url(./img/comitet/${person.image})` }} />
                                        <div className={s.name} dangerouslySetInnerHTML={{ __html: t(person.name) }} />
                                        <div className={s.position} dangerouslySetInnerHTML={{ __html: t(person.position) }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <SliderMobile styleName={s.comitet_wrapper}>
                        {
                            comitetData.map((person, idx) => {
                                return (
                                    <div key={idx} className={s.item}>
                                        <div className={s.photo} style={{ backgroundImage: `url(./img/comitet/${person.image})` }} />
                                        <div className={s.name} dangerouslySetInnerHTML={{ __html: t(person.name) }} />
                                        <div className={s.position} dangerouslySetInnerHTML={{ __html: t(person.position) }} />
                                    </div>
                                )
                            })
                        }
                    </SliderMobile>
                }

            </Container>
        </section >
    )
}