import InfoSection from "../InfoSection/InfoSection";
export default function FirstInfo() {
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
        <InfoSection content={content} fullscreen />
    )
}