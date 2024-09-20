import { Twirl as Hamburger } from 'hamburger-react';
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';

import Container from "../Container/Container";

import s from './Header.module.scss';
export default function Header({ scrollbarsRef }) {
    const { t } = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const headroomRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
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


    useEffect(() => {
        const handleScroll = () => {
            if (scrollbarsRef.current) {
                const currentScroll = scrollbarsRef.current.getScrollTop();
                
                if (currentScroll < lastScrollY) {
                    setIsScrollingUp(true);
                } else {
                    setIsScrollingUp(false);
                }

                setLastScrollY(currentScroll);

                if (headroomRef.current) {
                    if (isScrollingUp) {
                        headroomRef.current.pin();
                    } else {
                        headroomRef.current.unpin();
                    }
                }
            }
        };

        const scrollbars = scrollbarsRef.current;
        scrollbars.view.addEventListener('scroll', handleScroll);

        return () => {
            scrollbars.view.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isScrollingUp, scrollbarsRef]);

    return (
        <Headroom
            ref={headroomRef}
            onPin={() => console.log('pinned')}
            onUnpin={() => console.log('unpinned')}
            style={{ zIndex: 10 }}
        >
            <header className={`${isOpen ? s.open : ''}`}>
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
        </Headroom>
    )
}

Header.propTypes = {
    scrollbarsRef: PropTypes.object
};