import InfoSection from "../InfoSection/InfoSection";

export default function SecondInfo() {
    const content = {
        title: "title.join",
        startText: [
            "secondInfo.0"
        ],
        help: [
            "secondInfo.1.0",
            "secondInfo.1.1"
        ],
        btn: "btn.join",
        id: "join"
    }

    return (
        <InfoSection content={content} />
    )
}