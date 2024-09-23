import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import s from './SliderItem.module.scss';
export default function SliderItem({ slide, idx }) {
    const { t } = useTranslation();

    return (
        <div className={s.slide} inert="true" aria-hidden="true" >
            <img src={`./img/slider/about/${slide.image}`} alt={`slide-${idx}`} />
            {slide.points.map((point, idx) => {
                return (
                    <article key={idx} className={s.point}>
                        <p className={s.title}>{t(point.name)}</p>
                        <div className={s.text}>{t(point.text)}</div>
                    </article>
                )
            })}
        </div>
    )
}

SliderItem.propTypes = {
    slide: PropTypes.object,
    idx: PropTypes.number
};