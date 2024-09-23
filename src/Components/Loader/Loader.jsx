import { BallTriangle } from 'react-loader-spinner';

import s from './Loader.module.scss';
export default function Loader() {

    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass={s.loader_wrapper}
            visible={true}
        />
    )
}