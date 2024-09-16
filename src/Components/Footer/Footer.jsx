import { useTranslation } from "react-i18next";

import GoogleMap from "../GoogleMap/GoogleMap";
import Container from "../Container/Container";
import Button from "../UI/Button/Button";

import s from './Footer.module.scss';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact">
            <Container>
                <div className={s.footer_wrapper}>
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
                                {/* <a className={s.item} target="_blank" rel="noreferrer">
                                    <img src="./img/social/facebook.svg" alt="facebook" />
                                </a> */}
                                <a className={s.item} href="https://www.instagram.com/pilgrimagecenter/" target="_blank" rel="noreferrer">
                                    <img src="./img/social/instagram.svg" alt="instagram" />
                                </a>
                            </div>
                            <a href="https://www.pilgrimage.com.ua/" className={s.site_link} target="_blank" rel="noreferrer">www.pilgrimage.com.ua</a>
                            <div className={s.link_info}>
                                Посилання на сторінку о. Паїсія у фейсбуці, де регулярно публікуватиметься інформація про стан робіт, виконаних у Келії
                            </div>
                            <div className={s.links_icons}>
                                <a className={s.item} href="https://www.facebook.com/profile.php?id=100083772765560" target="_blank" rel="noreferrer">
                                    <img src="./img/social/facebook.svg" alt="facebook" />
                                </a>
                            </div>
                            <div className={s.links_wrapper}>
                                <a href="https://wa.me/380503525236" className={s.site_link} target="_blank" rel="noreferrer">
                                    +380503525236 <br />
                                    (WhatsApp, Signal)
                                </a>
                                <a href="mailto:pilgrimage_center@ukr.net" className={s.site_link} target="_blank" rel="noreferrer">
                                    pilgrimage_center@ukr.net
                                </a>
                            </div>

                            <Button footer>{t("btn.tel")}</Button>
                        </div>
                    </div>
                    <div className={s.map_wrapper}>
                        <div className={s.map}>
                            <GoogleMap />
                        </div>
                        <Button footer>{t("btn.docs")}</Button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}