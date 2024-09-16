import PropTypes from 'prop-types';

import s from './Title.module.scss';
export default function Title({ children, modal }) {

    return (
        <h2 className={`${s.title} ${modal ? s.modal : ''}`} dangerouslySetInnerHTML={{ __html: children }} />
    )
}

Title.propTypes = {
    children: PropTypes.node,
    modal: PropTypes.bool
};