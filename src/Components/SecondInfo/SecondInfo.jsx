import InfoSection from "../InfoSection/InfoSection";

export default function SecondInfo() {
    const content = {
        title: "secondInfo.join",
        startText: "secondInfo.0",
        help: [
            "secondInfo.1.0",
            "secondInfo.1.1"
        ],
        btn: "btn.join"
    }

    return (
        <InfoSection content={content} />
    )
}