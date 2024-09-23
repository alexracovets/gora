import Container from "../Container/Container";
import s from './FirstSection.module.scss';
export default function FirstSection() {

    return (
        <section className={s.first} id={"start"}>
            <Container>
                <div className={s.squad_wrapper}>
                    <div className={s.box}>
                        <div className={s.box_inner}>
                            <div className={s.title}>
                                А<span>Ф</span>ОН
                            </div>
                            <div className={s.desription}>
                                ВЕЛИКИЙ
                            </div>
                            <div className={s.project}>
                                ВСЕУКРАЇНСЬКИЙ ЗБІР
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
} 