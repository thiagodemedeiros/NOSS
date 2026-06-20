import { type AllPanelsData } from "../data/IAllPanelsData";
import allPanelsDataConfig from "../../../../configs/allPanelsDataConfig.yaml?raw";
import { parse } from "yaml";
import "./styles/KeynotesSection.css";

const allPanelsData =
    parse(allPanelsDataConfig) as { allPanelsData: AllPanelsData[] };
const panelData = allPanelsData.allPanelsData;

export const PanelsSection = () => {
    return (
        <div className="keynotesSection">
            <h3>Conheça os Participantes do nosso painel:</h3>
            <h4>{panelData[0].title}</h4>
            <div className="keynotesSectionAllCards">
                {panelData.map((panel) =>
                    [
                        ...panel.facilitatingPerson,
                        ...panel.participatingPeople
                    ].map((person) => (
                        <div key={person.name} className="keynotesCards">
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