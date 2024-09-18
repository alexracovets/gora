import { Scrollbars } from 'react-custom-scrollbars-2';
import PropTypes from 'prop-types';

import s from './CustomScroll.module.scss';

export default function CustomScroll({ children }) {

    return (
        <Scrollbars
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