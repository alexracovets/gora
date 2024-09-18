import PropTypes from 'prop-types';

import About from "../About/About";
import Patron from "../Patron/Patron";
import FirstInfo from "../FirstInfo/FirstInfo";
import SecondInfo from "../SecondInfo/SecondInfo";
import TimeLine from "../TimeLine/TimeLine";
import CurrentState from "../CurrentState/CurrentState";
import Comitet from "../Comitet/Comitet";
import GiftSection from "../GiftSection/GiftSection";

export default function Main() {

    return (
        <main>
            {/* {scrollHeight && <BackgroundPattern backgroundHeight={scrollHeight} />} */}
            <FirstInfo />
            <About />
            <Patron />
            <SecondInfo />
            <TimeLine />
            <CurrentState />
            <Comitet />
            <GiftSection />
        </main>
    )
}

Main.propTypes = {
    scrollHeight: PropTypes.number
};