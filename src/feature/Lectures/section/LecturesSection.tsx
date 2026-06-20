import { type AllLecturesData } from "../data/IAllLecturesData";
import allSpeakersDataConfig from "../../../../configs/allSpeakersDataConfig.yaml?raw";
import { parse } from "yaml";
import "./styles/LecturesSection.css";

const allSpeakersData =
    parse(allSpeakersDataConfig) as { allSpeakersData: AllLecturesData[] };
const speakers = allSpeakersData.allSpeakersData;

export const LecturesSection = () => {
    return (
        <div className="lecturesSection">
            <h3>Conheça nossos palestrantes:</h3>
            <div className="lecturesSectionAllCards">
                {speakers.map((speaker) => (
                    <div key={speaker.id} className="lectureCards">
                        <h4>{speaker.name}</h4>
                        <img src={speaker.photoUrl} alt={speaker.name} />
                        <h5>{speaker.lecture.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};