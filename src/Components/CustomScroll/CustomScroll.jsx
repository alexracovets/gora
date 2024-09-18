import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import s from './CustomScroll.module.scss';

export default function CustomScroll({ children, setIsScrolled }) {
    const scrollRef = useRef(null);

    const [prevScrollTop, setPrevScrollTop] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const currentScrollTop = scrollRef.current.getScrollTop();
            if (currentScrollTop > prevScrollTop) {
                setIsScrolled(false);
            } else {
                setIsScrolled(true);
            }
            setPrevScrollTop(currentScrollTop);
        }
    };

    useEffect(() => {
        if (scrollRef && scrollRef.current) {
            // setTimeout(() => {
            //     setScrollHeight(scrollRef.current.getScrollHeight());
            // }, 10);
            scrollRef.current.view.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.view.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollRef, prevScrollTop]);

    // useEffect(() => {
    //     if (scrollRef && scrollRef.current) {
    //         setTimeout(() => {
    //             setScrollHeight(scrollRef.current.getScrollHeight())
    //         }, 10)
    //     }
    // }, [scrollRef, setScrollHeight])

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
    setScrollHeight: PropTypes.func,
    setIsScrolled: PropTypes.func
};