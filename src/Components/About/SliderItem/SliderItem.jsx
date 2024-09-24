import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import s from './SliderItem.module.scss';
export default function SliderItem({ slide, idx }) {
    const { t } = useTranslation();
    return (
        <div className={s.slide} inert="true" aria-hidden="true" >
            <img src={`./img/slider/about/${slide.image}`} alt={`slide-${idx}`} />
            {slide.points.map((point, id) => {
                return (
                    <article key={id} className={s.point} number={`item_${idx}_${id}`}>
                        <div className={s.point_wrapper}>
                            <p className={s.text} dangerouslySetInnerHTML={{ __html: t(point) }} />
                            <div className={s.line_wrapper}>
                                <div className={s.line_block}>
                                    <div className={s.line}></div>
                                    <div className={s.dot}></div>
                                </div>
                            </div>
                        </div>
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