import PropTypes from 'prop-types';

import s from './Button.module.scss';
export default function Button({ children, small }) {

    return (
        <button className={small ? s.button + ' ' + s.small : s.button}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    small: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};