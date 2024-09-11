
import About from "../About/About";
import Patron from "../Patron/Patron";
import FirstInfo from "../FirstInfo/FirstInfo";
import SecondInfo from "../SecondInfo/SecondInfo";
import BackgroundPattern from "../UI/BackgroundPattern/BackgroundPattern";
import TimeLine from "../TimeLine/TimeLine";
import CurrentState from "../CurrentState/CurrentState";
import Comitet from "../Comitet/Comitet";


export default function Main() {

    return (
        <main>
            <BackgroundPattern />
            <FirstInfo />
            <About />
            <Patron />
            <SecondInfo />
            <TimeLine />
            <CurrentState />
            <Comitet />
        </main>
    )
}