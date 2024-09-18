import { useTranslation } from "react-i18next";

import Container from "../Container/Container";
import DashLine from "../UI/DashLine/DashLine";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import modalStore from '../../store/modalStore';

import s from './FirstInfo.module.scss';
export default function FirstInfo() {
    const { t } = useTranslation();
    const setIsPayModal = modalStore((state) => state.setIsPayModal);

    const content = {
        title: "title.gathering",
        startText: [
            "firstInfo.0.0",
            "firstInfo.0.1"
        ],
        help: [
            "firstInfo.1.0",
            "firstInfo.1.1"
        ],
        id: "start"
    }

    return (
        <section className={`${s.info}`} id={content.id}>
            <Container>
                <Title>{t(content.title)}</Title>
                <div className={s.we_are}>
                    {content.startText.map((text, idx) => {
                        return (
                            <p key={idx} dangerouslySetInnerHTML={{ __html: t(text) }} />
                        )
                    })}
                </div>
                <DashLine />
                <div className={s.help}>
                    {content.help.map((item, idx) => {
                        return <p key={idx} dangerouslySetInnerHTML={{ __html: t(item) }} />
                    })}
                </div>
                {content.btn ? <Button click={() => setIsPayModal(true)}>{t(content.btn)}</Button> : null}

            </Container>
        </section >
    )
} 