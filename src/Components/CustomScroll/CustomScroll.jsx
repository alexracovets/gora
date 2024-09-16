import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import s from './CustomScroll.module.scss';
export default function CustomScroll({ children, setScrollHeight }) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef && scrollRef.current) {
            setTimeout(() => {
                setScrollHeight(scrollRef.current.getScrollHeight())
            }, 10)

        }
    }, [scrollRef, setScrollHeight])

    return (
        <Scrollbars
            ref={scrollRef}
            universal
            autoHeight
            autoHeightMax={'100dvh'}
            renderTrackVertical={props => <div {...props} className={s.track_vertical} />}
            renderThumbVertical={props => <div {...props} className={s.thumb_vertical} />}
        >
            {children}
        </Scrollbars>
    )
}

CustomScroll.propTypes = {
    children: PropTypes.node,
    setScrollHeight: PropTypes.func
};