import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import Container from "../Container/Container";
import DashLine from "../UI/DashLine/DashLine";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

import s from './InfoSection.module.scss';
export default function InfoSection({ content }) {
    const { t } = useTranslation();

    return (
        <section className={s.info}>
            <Container>
                <Title>{t(content.title)}</Title>
                <p className={s.we_are}>{t(content.startText)}</p>
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
    content: PropTypes.object
};