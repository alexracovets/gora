import PropTypes from 'prop-types';

import s from './SliderArrow.module.scss';
export default function SliderArrow({ onClick, isPrev, isBottom, isProgress, isProgressModal, disabled }) {

    return (
        <img className={`${isPrev ? s.arrowPrev : s.arrowNext} ${isBottom ? s.bottom : ''} ${isProgress ? s.progress : ''} ${isProgressModal ? s.progress_modal : ''} ${disabled ? s.disabled : ''}`}
            src="./img/slider/about/arrow/arrow.svg"
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