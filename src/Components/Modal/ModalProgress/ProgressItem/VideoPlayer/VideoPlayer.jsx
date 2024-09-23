import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import s from '../../ModalProgress.module.scss';
import Loader from '../../../../Loader/Loader';

export default function VideoPlayer({ src }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const checkVideoAvailability = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setIsLoading(false);
                } else {
                    setIsError(true);
                }
            } catch (error) {
                setIsError(true);
            }
        };

        checkVideoAvailability();
    }, [src]);

    if (isError) {
        return <Loader />;
    }
    return (
        <>

            <div className={s.content_wrapper}>
                <ReactPlayer url={src} playing muted loop onStart={console.log('1')} />
                {isLoading && <Loader />}
            </div >

        </>
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};
