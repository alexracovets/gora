import PropTypes from 'prop-types';

import s from './Button.module.scss';
export default function Button({ children }) {

    return (
        <button className={s.button}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node
};