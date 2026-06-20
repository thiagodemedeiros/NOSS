import { type AllLecturesData } from "../data/IAllLecturesData";
import allSpeakersDataConfig from "../../../../configs/allSpeakersDataConfig.yaml?raw";
import { type AllPanelsData } from "../data/IAllPanelsData";
import allPanelsDataConfig from "../../../../configs/allPanelsDataConfig.yaml?raw";
import { parse } from "yaml";
import "./styles/LecturesSection.css";

const allSpeakersData =
    parse(allSpeakersDataConfig) as { allSpeakersData: AllLecturesData[] };
const speakers = allSpeakersData.allSpeakersData;
const allPanelsData =
    parse(allPanelsDataConfig) as { allPanelsData: AllPanelsData[] };
const panelData = allPanelsData.allPanelsData;

export const LecturesSection = () => {
    console.log(panelData)
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
                {panelData.map((panel) =>
                    [
                        ...panel.facilitatingPerson,
                        ...panel.participatingPeople
                    ].map((person) => (
                        <div key={person.name} className="lectureCards">
                            <h4>{person.name}</h4>
                            <img src={person.photoUrl} alt={person.name} />
                            <h5>{panel.title}</h5>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};