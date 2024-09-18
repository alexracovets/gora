import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import modalStore from '../../../store/modalStore';

import s from '../GiftSection.module.scss';
export default function SliderItem({ slide, currentSlide, index, totalSlides, plusClases }) {
    const { t } = useTranslation();
    const setIsPayModal = modalStore((state) => state.setIsPayModal);
    const [isActive, setIsActive] = useState(false);
    const [isSecond, setIsSecond] = useState(false);

    useEffect(() => {
        setIsActive(currentSlide === index);

        const isPrevious = currentSlide === 0 ? index === totalSlides - 1 : index === currentSlide - 1;
        const isNext = currentSlide === totalSlides - 1 ? index === 0 : index === currentSlide + 1;

        setIsSecond(isPrevious || isNext);
    }, [currentSlide, index, totalSlides]);

    return (
        <div
            className={`${s.item} ${isActive && s.active} ${(isSecond) && s.second} ${plusClases ? plusClases : ''} `}
        >
            {/* <div className={s.dot}>{slide.number}/<span>25</span></div> */}
            <div className={s.item_wrapper}>
                <div className={s.name} dangerouslySetInnerHTML={{ __html: t(slide.name) }} />
                <div className={s.price} dangerouslySetInnerHTML={{ __html: t(slide.price) }} />
                <button onClick={() => setIsPayModal(true)}> {t("btn.contribution")} </button>
            </div>
        </div>
    )
}

SliderItem.propTypes = {
    slide: PropTypes.object,
    index: PropTypes.number,
    currentSlide: PropTypes.number,
    totalSlides: PropTypes.number,
    plusClases: PropTypes.string
};