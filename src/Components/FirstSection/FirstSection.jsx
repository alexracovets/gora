import Container from "../Container/Container";
import s from './FirstSection.module.scss';
export default function FirstSection() {

    const content = {
        title: "title.gathering",
        startText: [
            "firstInfo.0.0",
            "firstInfo.0.1"
        ],
        help: [
            "firstInfo.1.0",
            "firstInfo.1.1"
        ],
        id: "start"
    }

    return (
        <section className={s.first} id={content.id}>
            <Container>

            </Container>
        </section>
    )
} 