import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import Container from "../Container/Container";
import DashLine from "../UI/DashLine/DashLine";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import modalStore from '../../store/modalStore';

import s from './InfoSection.module.scss';
export default function InfoSection({ content, fullscreen }) {
    const { t } = useTranslation();
    const setIsPayModal = modalStore((state) => state.setIsPayModal);

    return (
        <section className={`${s.info} ${fullscreen ? s.full_screen : ''}`} id={content.id}>
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

InfoSection.propTypes = {
    content: PropTypes.object,
    fullscreen: PropTypes.bool
};