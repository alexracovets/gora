import PropTypes from 'prop-types';

import s from './Button.module.scss';
export default function Button({ children, small, footer, submit, click }) {

    return (
        <button
            type={`${submit ? 'submit' : 'button'}`}
            className={`${s.button} ${small ? s.small : ''}  ${footer ? s.footer_btn : ''}`}
            onClick={click ? click : null}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    footer: PropTypes.bool,
    submit: PropTypes.bool,
    click: PropTypes.func,
    small: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};