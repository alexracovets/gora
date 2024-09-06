
import About from "../About/About";
import Patron from "../Patron/Patron";
import FirstInfo from "../FirstInfo/FirstInfo";
import SecondInfo from "../SecondInfo/SecondInfo";
import BackgroundPattern from "../UI/BackgroundPattern/BackgroundPattern";


export default function Main() {

    return (
        <main>
            <BackgroundPattern />
            <FirstInfo />
            <About />
            <Patron />
            <SecondInfo />
        </main>
    )
}