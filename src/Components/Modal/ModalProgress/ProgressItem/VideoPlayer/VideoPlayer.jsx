import { useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import s from '../../ModalProgress.module.scss';
import Loader from '../../../../Loader/Loader';

export default function VideoPlayer({ src }) {
    const [isLoading, setIsLoading] = useState(true); // Спочатку завантажуємо

    const handleReady = () => {
        setIsLoading(false); // Коли відео готове, вимикаємо лоудер
    };

    const handleError = () => {
        setIsLoading(false); // Вимкнути лоудер у випадку помилки
    };

    return (
        <div className={s.content_wrapper}>
            {isLoading && <Loader />} {/* Показуємо лоудер, якщо isLoading === true */}
            <ReactPlayer
                className={s.content_wrapper}
                url={src}
                playing
                muted
                loop
                onReady={handleReady}  // Коли відео готове до відтворення
                onError={handleError}  // Якщо сталася помилка
                width="100%"
                height="100%"
            />
        </div>
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired
};
