import { KeynotesSection } from "../section/KeynotesSection";
import { LecturesSection } from "../section/LecturesSection";
import "./LecturesPage.css";

export const LecturesPage = () => {
    return (
        <div className="lecturePage">
            <div className="lecturePageContainer">
                <h3>LecturesPage</h3>
                <KeynotesSection />
                <LecturesSection />
            </div>
        </div>
    );
};