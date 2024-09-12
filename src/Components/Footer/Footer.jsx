import Container from "../Container/Container";

import s from './Footer.module.scss';
export default function Footer() {

    return (
        <footer>
            <Container>
                <div className={s.contacts}>
                    <div className={s.title}>
                        Контакти
                    </div>
                    <div className={s.cosial}>
                        <div className={s.name}>
                            Соцмережі
                            <br />
                            Паломницького Центру
                        </div>
                        <div className={s.links_icons}>
                            <a className={s.item}>
                                <img src="./img/social/facebook.svg" alt="" />
                            </a>
                            <a className={s.item}>
                                <img src="./img/social/instagram.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}