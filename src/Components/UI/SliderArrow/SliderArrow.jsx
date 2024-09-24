import PropTypes from 'prop-types';

import arrow from '/img/slider/arrow/arrow.svg';

import s from './SliderArrow.module.scss';
export default function SliderArrow({ onClick, isPrev, isBottom, isProgress, isProgressModal, disabled }) {

    return (
        <img className={`${isPrev ? s.arrowPrev : s.arrowNext} ${isBottom ? s.bottom : ''} ${isProgress ? s.progress : ''} ${isProgressModal ? s.progress_modal : ''} ${disabled ? s.disabled : ''}`}
            src={arrow}
            onClick={onClick}
            alt={isPrev ? 'back' : "next"}
        />
    )
}

SliderArrow.propTypes = {
    onClick: PropTypes.func,
    isPrev: PropTypes.bool,
    isBottom: PropTypes.bool,
    isProgress: PropTypes.bool,
    isProgressModal: PropTypes.bool,
    disabled: PropTypes.bool
}; 