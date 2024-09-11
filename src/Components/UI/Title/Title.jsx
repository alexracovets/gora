import PropTypes from 'prop-types';

import s from './Title.module.scss';
export default function Title({ children }) {

    return (
        <h2 className={s.title} dangerouslySetInnerHTML={{ __html: children }} />
    )
}

Title.propTypes = {
    children: PropTypes.node
};