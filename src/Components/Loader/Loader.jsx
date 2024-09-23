import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import s from './Loader.module.scss';
export default function Loader({ content }) {

    return (
        <BallTriangle
            height={content ? '50%' : 100}
            width={content ? '50%' : 100}
            radius={5}
            color="#EBD7B2" 
            wrapperClass={s.loader_wrapper}
            visible={true}
        />
    )
}

Loader.propTypes = {
    content: PropTypes.bool
};
