import { useTranslation } from "react-i18next";

import Title from "../UI/Title/Title";
import timeLineData from '../../data/timeLineData';
import Container from "../Container/Container";

import s from './TimeLine.module.scss';
export default function TimeLine() {
    const { t } = useTranslation();

    return (
        <section className={s.time_line}>
            <Container>
                <Title>{t("title.building")}</Title>
                <div className={s.line}>
                    {
                        timeLineData.map((time, idx) => {
                            return (
                                <div key={idx} className={`${s.dot} ${idx % 2 ? s.left : s.right}`}>
                                    <div className={s.dot_wrapper}>
                                        <div className={s.content}>
                                            <div className={s.title}>{t(time.title)}</div>
                                            <div className={s.info}>
                                                {time.info.map((text, id) => <p key={id}>{t(text)}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}