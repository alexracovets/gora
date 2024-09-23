import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import s from '../../ModalProgress.module.scss';
import Loader from '../../../../Loader/Loader';

export default function VideoPlayer({ src }) {
    const [content, setContent] = useState(false)

    useEffect(() => {
        const checkVideoAvailability = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setContent(response.url)
                }
            } catch (error) {
                console.log(`error_${src}`)
            }
        };

        checkVideoAvailability();
    }, [src]);

    return (
        <>

            <div className={s.content_wrapper}>
                {content ? <ReactPlayer url={content} playing muted loop onStart={console.log('1')} /> : <Loader />}
            </div >

        </>
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};
