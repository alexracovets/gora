import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import s from '../../ModalProgress.module.scss';
import Loader from '../../../../Loader/Loader';

export default function VideoPlayer({ src }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Робимо запит на завантаження відео
        const checkVideoAvailability = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setIsLoading(false); // Якщо ресурс доступний, вимикаємо лоудер
                } else {
                    setIsError(true); // Якщо ресурс недоступний, показуємо помилку
                }
            } catch (error) {
                setIsError(true); // Помилка при запиті
            }
        };

        checkVideoAvailability();
    }, [src]);

    if (isError) {
        return <Loader />; // Показуємо лоудер або інший компонент у разі помилки
    }

    return (
        <div className={s.content_wrapper}>
            {isLoading ? (
                <Loader />  // Показуємо лоудер, поки чекаємо на відповідь
            ) : (
                <ReactPlayer
                    url={src}
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};
