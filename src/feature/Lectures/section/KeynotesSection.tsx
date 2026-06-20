import AllKeynotesDataConfig from "../../../../configs/allKeynotesDataConfig.yaml?raw";
import { type Keynotes} from "../data/IAllKeynotesData"
import "./styles/KeynotesSection.css";
import { parse } from "yaml";

const AllKeynotesData = 
    parse(AllKeynotesDataConfig) as { AllKeynotesData: Keynotes[] };
const keynotesData = AllKeynotesData.AllKeynotesData;

export const KeynotesSection = () => {
    return (
        <div className="keynotesSection">
            <h3>Nossas Keynotes:</h3>
            <div className="keynotesSectionAllCards">
                {keynotesData.map((keynote) => (
                    <div key={keynote.id} className="keynotesCards">
                        <h4>{keynote.name}</h4>
                        <img src={keynote.photoUrl} alt={keynote.name} />
                        <h5>{keynote.lecture.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
};
