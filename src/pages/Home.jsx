import About from "../Components/About/About";
import Comitet from "../Components/Comitet/Comitet";
import CurrentState from "../Components/CurrentState/CurrentState";
import FirstSection from "../Components/FirstSection/FirstSection";
import GiftSection from "../Components/GiftSection/GiftSection";
import Patron from "../Components/Patron/Patron";
import SecondInfo from "../Components/SecondInfo/SecondInfo";
import TimeLine from "../Components/TimeLine/TimeLine";
import ModalPay from '../Components/Modal/ModalPay/ModalPay';
import ModalProgress from '../Components/Modal/ModalProgress/ModalProgress';
import ScrollToHashElement from "../static/ScrollToHashElement";

import s from './Home.module.scss';
function Home() {

    return (
        <>
            <ScrollToHashElement behavior="smooth" inline="start" block="start" />
            <section className={s.first} id="first">
                <FirstSection />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="patron">
                <Patron />
            </section>
            <section id="gifts">
                <GiftSection />
            </section>
            <section id="join">
                <SecondInfo />
            </section >
            <section id="time_line">
                <TimeLine />
            </section>
            <section id="time_line">
                <CurrentState />
            </section>
            <section id="comitet">
                <Comitet />
            </section>
            <ModalPay />
            <ModalProgress />
        </>
    )
}

export default Home;