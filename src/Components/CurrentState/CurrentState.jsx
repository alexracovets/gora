import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import Title from "../UI/Title/Title";

import s from './CurrentState.module.scss';
export default function CurrentState() {
    const { t } = useTranslation();

    return (
        <section className={s.state}>
            <Container>
                <Title>{t("title.current_state")}</Title>
                <div className={s.video_wrapper}>
                    <video src=""></video>
                </div>
            </Container>
        </section>
    )
}