import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import s from '../../Comitet.module.scss';
export default function ComitetMobileItem({ person, idx, activeSlideIndex }) {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(activeSlideIndex === idx);
    }, [activeSlideIndex, idx])

    return (
        <div className={s.item_wrapper}>
            <div key={idx} className={`${s.item} ${isActive ? s.active : ''}`}>
                <div className={s.photo} style={{ backgroundImage: `url(./img/comitet/${person.image})` }} />
                <div className={s.name} dangerouslySetInnerHTML={{ __html: t(person.name) }} />
                <div className={s.position} dangerouslySetInnerHTML={{ __html: t(person.position) }} />
            </div>
        </div>
    )
}

ComitetMobileItem.propTypes = {
    person: PropTypes.object,
    idx: PropTypes.number,
    activeSlideIndex: PropTypes.number
};