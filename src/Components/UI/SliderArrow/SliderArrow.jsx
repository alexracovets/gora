import PropTypes from 'prop-types';

import s from './SliderArrow.module.scss';
export default function SliderArrow({ onClick, isPrev, isBottom }) {

    return (
        <img className={`${isPrev ? s.arrowPrev : s.arrowNext} ${isBottom && s.bottom}`}
            src="./img/slider/about/arrow/arrow.svg"
            onClick={onClick}
        />
    )
}

SliderArrow.propTypes = {
    onClick: PropTypes.func,
    isPrev: PropTypes.bool,
    isBottom: PropTypes.bool
}; 