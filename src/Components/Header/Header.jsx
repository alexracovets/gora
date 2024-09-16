import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import Container from "../Container/Container";

import s from './Header.module.scss';
export default function Header() {
    const { t } = useTranslation();

    const links = [
        {
            name: t("links.0"),
            href: "#start"
        },
        {
            name: t("links.1"),
            href: "#about"
        },
        {
            name: t("links.2"),
            href: "#patron"
        },
        {
            name: t("links.3"),
            href: "#join"
        },
        {
            name: t("links.4"),
            href: "#time_line"
        },
        {
            name: t("links.5"),
            href: "#comitet"
        },
        {
            name: t("links.6"),
            href: "#gifts"
        },
        {
            name: t("links.7"),
            href: "#contact"
        }
    ]

    return (
        <header>
            <Container>
                <nav className={s.navigation}>
                    <ul>
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={link.href}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}