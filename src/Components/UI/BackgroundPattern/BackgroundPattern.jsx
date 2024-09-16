import pattern from "/img/pattern/pattern_gray.svg";
import PropTypes from 'prop-types';

import s from './BackgroundPattern.module.scss';
export default function BackgroundPattern({ backgroundHeight }) {
    console.log(backgroundHeight) 
    return (
        <div className={s.pattern} style={{ backgroundImage: `url(${pattern})`, minHeight: `${backgroundHeight}px` }}></div>
    )
}

BackgroundPattern.propTypes = {
    backgroundHeight: PropTypes.number
};