import { KeynotesSection } from "../section/KeynotesSection";
import { LecturesSection } from "../section/LecturesSection";
import { PanelsSection } from "../section/PanelsSection";
import "./LecturesPage.css";

export const LecturesPage = () => {
    return (
        <div className="lecturePage">
            <div className="lecturePageContainer">
                <h3>Conheça nossos convidados:</h3>
                <KeynotesSection />
                <LecturesSection />
                <PanelsSection />
            </div>
        </div>
    );
};