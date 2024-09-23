import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import Item from "./Item/Item";

import patronData from "../../data/patronData";
import patronDataMobile from "../../data/patronDataMobile";
import SliderMobile from "../SliderMobile/SliderMobile";

import s from './Patron.module.scss';
export default function Patron({ onLoad }) {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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

    useEffect(() => {
        if (onLoad) {
            onLoad();
        }
    }, [onLoad]);

    return (
        <>
            {
                isDesktop ?
                    <Container>
                        <Title>{t("title.patron")}</Title>
                        <div className={s.patron_type} >
                            {data.map((item, idx) => {
                                return <Item key={idx} item={item} idx={idx} />
                            })}
                        </div>
                    </Container> :
                    <>
                        <Title>{t("title.patron")}</Title>
                        <SliderMobile styleName={s.patron_type} onSlideChange={setActiveSlideIndex}>
                            {data.map((item, idx) => {
                                return <Item key={idx} item={item} idx={idx} activeSlideIndex={activeSlideIndex} />
                            })}
                        </SliderMobile>
                    </>
            }
        </>
    )
}