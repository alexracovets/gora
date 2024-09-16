import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import Item from "./Item/Item";

import patronData from "../../data/patronData";
import patronDataMobile from "../../data/patronDataMobile";
import SliderMobile from "../SliderMobile/SliderMobile";

import s from './Patron.module.scss';
export default function Patron() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430)

    useEffect(() => {
        const updateData = () => {
            if (window.innerWidth <= 430) {
                setData(patronDataMobile);
                setIsDesktop(false);
            } else {
                setData(patronData);
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
        <section className={s.patronat}>
            <Container>
                <Title>{t("title.patron")}</Title>
                {data
                    ?
                    <>
                        {
                            isDesktop ?
                                <div className={s.patron_type} >
                                    {
                                        data.map((item, idx) => {
                                            return <Item key={idx} item={item} idx={idx} />
                                        })
                                    }
                                </div> :
                                <SliderMobile styleName={s.patron_type} >
                                    {data.map((item, idx) => {
                                        return <Item key={idx} item={item} idx={idx} />
                                    })}
                                </SliderMobile>
                        }
                    </>
                    : null}
            </Container>
        </section >
    )
}