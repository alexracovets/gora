import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import Container from "../Container/Container";
import DashLine from "../UI/DashLine/DashLine";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import s from './InfoSection.module.scss';
export default function InfoSection({ content, fullscreen }) {
    const { t } = useTranslation();

    return (
        <section className={`${s.info} ${fullscreen ? s.full_screen : ''}`} id={content.id}>
            <Container>
                <Title>{t(content.title)}</Title>
                {content.startText.map((text, idx) => {
                    return (
                        <p key={idx} className={s.we_are} dangerouslySetInnerHTML={{ __html: t(text) }} />
                    )
                })}
                <DashLine />
                <div className={s.help}>
                    {content.help.map((item, idx) => {
                        return <p key={idx} >
                            {t(item)}
                        </p>
                    })}
                </div>
                <Button>{t("btn.more")}</Button>
            </Container>
        </section >

    )
}

InfoSection.propTypes = {
    content: PropTypes.object,
    fullscreen: PropTypes.bool
};