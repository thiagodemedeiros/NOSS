import { allKeynotesData } from "../data/AllKeynotesData";
import "./KeynotesSection.css";

export const KeynotesSection = () => {
    return (
        <div className="keynotesSection">
            <h3>Nossos Keynotes:</h3>
            <div className="keynotesSectionAllCards">
                {allKeynotesData.map((lecture) => (
                    <div key={lecture.speaker.id} className="keynotesCards">
                        <h4>{lecture.speaker.name}</h4>
                        <img src={lecture.speaker.photoUrl} alt={lecture.speaker.name} />
                        <h5>{lecture.speaker.lecture.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
};
