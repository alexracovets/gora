import { Twirl as Hamburger } from 'hamburger-react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from "react";

import Container from "../Container/Container";

import s from './Header.module.scss';
export default function Header({ isScrolled }) {
    const { t } = useTranslation();
    const [isOpen, setOpen] = useState(false);

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
        <header className={`${!isScrolled ? s.disable : s.active} ${isOpen ? s.open : ''}`}>
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
                <div className={s.burger_wrapper}>
                    <div className={s.burger}>
                        <Hamburger toggled={isOpen} toggle={setOpen} className={s.me_burger} color="white" size={36} />
                    </div>
                </div>
                <div className={`${s.navigation_mobile} ${isOpen ? s.active : ''}`}>
                    <ul>
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={link.href} onClick={() => { setOpen(prevIsOpen => !prevIsOpen) }}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Container>
        </header >
    )
}

Header.propTypes = {
    isScrolled: PropTypes.bool
};