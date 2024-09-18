import { useState } from "react";

import comitetData from "../../../data/comitetData";
import SliderMobile from "../../SliderMobile/SliderMobile";
import ComitetMobileItem from "./ComitetMobileItem/ComitetMobileItem";

import s from '../Comitet.module.scss';
export default function ComitetMobile() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <SliderMobile styleName={s.comitet_wrapper} onSlideChange={(index) => setActiveSlideIndex(index)}>
            {
                comitetData.map((person, idx) => {
                    return (
                        <ComitetMobileItem key={idx} idx={idx} person={person} activeSlideIndex={activeSlideIndex} />
                    )
                })
            }
        </SliderMobile>
    )
} 