import { allLecturesData } from "../data/AllLecturesData";
import { allPanelsData } from "../data/AllPanelsData";
import "./styles/LecturesSection.css";

export const LecturesSection = () => {
    return (
        <div className="lecturesSection">
            <h3>Conheça nossos palestrantes:</h3>
            <div className="lecturesSectionAllCards">
                {allLecturesData.map((lecture) => (
                    <div key={lecture.speaker.id} className="lectureCards">
                        <h4>{lecture.speaker.name}</h4>
                        <img src={lecture.speaker.photoUrl} alt={lecture.speaker.name} />
                        <h5>{lecture.speaker.lecture.title}</h5>
                    </div>
                ))}
                {allPanelsData.map((panel) =>
                    [
                        ...panel.panel.facilitatingPerson,
                        ...panel.panel.participatingPeople
                    ].map((person) => (
                        <div key={person.name} className="lectureCards">
                            <h4>{person.name}</h4>
                            <img src={person.photoUrl} alt={person.name} />
                            <h5>{panel.panel.title}</h5>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};