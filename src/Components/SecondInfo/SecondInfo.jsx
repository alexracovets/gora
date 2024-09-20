import { useTranslation } from "react-i18next";

import modalStore from '../../store/modalStore';
import DashLine from "../UI/DashLine/DashLine";
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import s from './SecondInfo.module.scss';
export default function SecondInfo() {
    const { t } = useTranslation();
    const setIsPayModal = modalStore((state) => state.setIsPayModal);
    const content = {
        title: "title.join",
        startText: [
            "secondInfo.0"
        ],
        help: [
            "secondInfo.1.0",
            "secondInfo.1.1"
        ],
        btn: "btn.join",
        id: "join"
    }

    return (
        <section className={s.info} id={content.id}>
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