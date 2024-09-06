import InfoSection from "../InfoSection/InfoSection";
export default function FirstInfo() {
    const content = {
        title: "firstInfo.gathering",
        startText: "firstInfo.0",
        help: [
            "firstInfo.1.0",
            "firstInfo.1.1"
        ],
        btn: "btn.more"
    }

    return (
        <InfoSection content={content} />
    )
}