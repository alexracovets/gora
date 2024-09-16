import { useTranslation } from "react-i18next";
import YouTube from 'react-youtube';

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './CurrentState.module.scss';
export default function CurrentState() {
    const { t } = useTranslation();
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            rel: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            start: 11
        },
    };
    return (
        <section className={s.state}>
            <Container>
                <Title>{t("title.current_state")}</Title>
                <div className={s.video_wrapper}>
                    <YouTube
                        videoId="_-8UIkpVZiM"
                        opts={opts}
                        className={s.video}
                    />
                </div>
            </Container>
        </section>
    )
}