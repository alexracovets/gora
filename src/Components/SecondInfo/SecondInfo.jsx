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

    return (
        <Container>
            <Title>{t("title.join")}</Title>
            <div className={s.we_are}>
                <p dangerouslySetInnerHTML={{ __html: t("secondInfo.0") }} />
            </div>
            <DashLine />
            <div className={s.help}>
                <p dangerouslySetInnerHTML={{ __html: t("secondInfo.1.0") }} />
                <p dangerouslySetInnerHTML={{ __html: t("secondInfo.1.1") }} />
            </div>
            <Button click={() => setIsPayModal(true)}>{t("btn.join")}</Button>
        </Container>
    )
}