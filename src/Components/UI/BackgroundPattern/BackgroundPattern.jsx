import pattern from "/img/pattern/pattern_gray.svg";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import s from './BackgroundPattern.module.scss';

export default function BackgroundPattern({ backgroundHeight }) {
    const [showPattern, setShowPattern] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowPattern(false);
            setTimeout(() => {
                setShowPattern(true);
            }, 0);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        showPattern && (
            <div className={s.pattern} style={{ backgroundImage: `url(${pattern})`, minHeight: `${backgroundHeight / 2}rem` }}></div>
        )
    );
}

BackgroundPattern.propTypes = {
    backgroundHeight: PropTypes.number
};
