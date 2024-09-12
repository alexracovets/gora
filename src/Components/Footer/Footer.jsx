import Container from "../Container/Container";

import s from './Footer.module.scss';
export default function Footer() {

    return (
        <Container>
            <section>
                <div className={s.contacts}>
                    <div className={s.title}>
                        Контакти
                    </div>
                    <div className={s.cosial}>
                        <div className={s.name}>
                            Соцмережі Паломницького Центру
                        </div>
                        <div className={s.links_icons}>
                            <div className={s.item}>
                                <img src="" alt="" />
                            </div>
                            <div className={s.item}>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}