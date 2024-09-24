import { useTranslation } from "react-i18next";
import ReactPlayer from 'react-player';

import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import poster from '/img/youtube_poster.jpg';
import s from './CurrentState.module.scss';
export default function CurrentState() {
    const { t } = useTranslation();

    return (
        <Container>
            <Title>{t("title.current_state")}</Title>
            <div className={s.video_wrapper} style={{ backgroundImage: `url(${poster})` }}>
                <ReactPlayer
                    light={poster}
                    url={'https://youtu.be/_-8UIkpVZiM?si=JOqX1BBxVQLIHX-4&t=12'}
                    width="100%"
                    height="100%"
                    playing

                />
            </div>
        </Container>
    )
}