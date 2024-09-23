import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const About = lazy(() => import('../Patron/Patron'));
const Patron = lazy(() => import('../About/About'));
const FirstSection = lazy(() => import('../FirstSection/FirstSection'));
const SecondInfo = lazy(() => import('../SecondInfo/SecondInfo'));
const TimeLine = lazy(() => import('../TimeLine/TimeLine'));
const CurrentState = lazy(() => import('../CurrentState/CurrentState'));
const Comitet = lazy(() => import('../Comitet/Comitet'));
const GiftSection = lazy(() => import('../GiftSection/GiftSection'));

export default function Main() {

    return (
        <main>
            <Suspense fallback={null}>
                <FirstSection />
            </Suspense>
            <Suspense fallback={null}>
                <Patron />
            </Suspense>
            <Suspense fallback={null}>
                <About />
            </Suspense>
            <Suspense fallback={null}>
                <GiftSection />
            </Suspense>
            <Suspense fallback={null}>
                <SecondInfo />
            </Suspense>
            <Suspense fallback={null}>
                <TimeLine />
            </Suspense>
            <Suspense fallback={null}>
                <CurrentState />
            </Suspense>
            <Suspense fallback={null}>
                <Comitet />
            </Suspense>
        </main>
    )
}

Main.propTypes = {
    scrollHeight: PropTypes.number
};