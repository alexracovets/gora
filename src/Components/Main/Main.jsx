import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

// import About from "../About/About";
// import Patron from "../Patron/Patron";
// import FirstInfo from "../FirstInfo/FirstInfo";
// import SecondInfo from "../SecondInfo/SecondInfo";
// import TimeLine from "../TimeLine/TimeLine";
// import CurrentState from "../CurrentState/CurrentState";
// import Comitet from "../Comitet/Comitet";
// import GiftSection from "../GiftSection/GiftSection";

const About = lazy(() => import('../Patron/Patron'));
const Patron = lazy(() => import('../About/About'));
const FirstInfo = lazy(() => import('../FirstInfo/FirstInfo'));
const SecondInfo = lazy(() => import('../SecondInfo/SecondInfo'));
const TimeLine = lazy(() => import('../TimeLine/TimeLine'));
const CurrentState = lazy(() => import('../CurrentState/CurrentState'));
const Comitet = lazy(() => import('../Comitet/Comitet'));
const GiftSection = lazy(() => import('../GiftSection/GiftSection'));

export default function Main() {

    return (
        <main>
            {/* {scrollHeight && <BackgroundPattern backgroundHeight={scrollHeight} />} */}
            <Suspense fallback={null}>
                <FirstInfo />
            </Suspense>
            <Suspense fallback={null}>
                <About />
            </Suspense>
            <Suspense fallback={null}>
                <Patron />
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
            <Suspense fallback={null}>
                <GiftSection />
            </Suspense>
        </main>
    )
}

Main.propTypes = {
    scrollHeight: PropTypes.number
};