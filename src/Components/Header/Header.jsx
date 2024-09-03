import { useTranslation } from "react-i18next";

import Container from "../Container/Container";

import s from './Header.module.scss';
export default function Header() {
    const { t } = useTranslation();

    const links = [
        {
            name: t("links.0"),
            href: "###"
        },
        {
            name: t("links.1"),
            href: "###"
        },
        {
            name: t("links.2"),
            href: "###"
        },
        {
            name: t("links.3"),
            href: "###"
        },
        {
            name: t("links.4"),
            href: "###"
        },
        {
            name: t("links.5"),
            href: "###"
        },
        {
            name: t("links.6"),
            href: "###"
        },
        {
            name: t("links.7"),
            href: "###"
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
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}