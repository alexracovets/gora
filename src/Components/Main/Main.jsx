import { lazy, Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

const About = lazy(() => import('../Patron/Patron'));
const Patron = lazy(() => import('../About/About'));
const FirstSection = lazy(() => import('../FirstSection/FirstSection'));
const SecondInfo = lazy(() => import('../SecondInfo/SecondInfo'));
const TimeLine = lazy(() => import('../TimeLine/TimeLine'));
const CurrentState = lazy(() => import('../CurrentState/CurrentState'));
const Comitet = lazy(() => import('../Comitet/Comitet'));
const GiftSection = lazy(() => import('../GiftSection/GiftSection'));

import s from './Main.module.scss';
export default function Main({ scrollbarsRef }) {
    useEffect(() => {
        if (scrollbarsRef.current) {
            scrollbarsRef.current.update(); // Оновлення скролбарів
        }
    }, [scrollbarsRef]);
    return (
        <main>
            <section className={s.first} id={"start"}>
                <Suspense fallback={<Loader />}>
                    <FirstSection />
                </Suspense>
            </section>
            <section id="patron">
                <Suspense fallback={<Loader />}>
                    <Patron />
                </Suspense>
            </section>
            <section id="about">
                <Suspense fallback={<Loader />}>
                    <About />
                </Suspense>
            </section>
            <section id="gifts">
                <Suspense fallback={<Loader />}>
                    <GiftSection />
                </Suspense>
            </section>
            <section id="join">
                <Suspense fallback={<Loader />}>
                    <SecondInfo />
                </Suspense>
            </section >
            <section id="time_line">
                <Suspense fallback={<Loader />}>
                    <TimeLine />
                </Suspense>
            </section>
            <section id="time_line">
                <Suspense fallback={<Loader />}>
                    <CurrentState />
                </Suspense>
            </section>
            <section id="comitet">
                <Suspense fallback={<Loader />}>
                    <Comitet />
                </Suspense>
            </section>
        </main>
    )
}

Main.propTypes = {
    scrollbarsRef: PropTypes.object
};