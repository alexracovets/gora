import PropTypes from 'prop-types';

import s from './Button.module.scss';
export default function Button({ children, small, footer }) {

    return (
        <button className={`${s.button} ${small ? s.small : ''}  ${footer ? s.footer_btn : ''}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    footer: PropTypes.bool,
    small: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};