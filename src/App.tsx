import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./feature/Home/Home";
import { PagePartnerOrganizations } from "./feature/PartnerOrganizations/page/PagePartnerOrganizations";
import { ScrollToTop } from "./global/components/ScrollToTop";
import { LecturesPage } from "./feature/Lectures";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/partner-organizations/:id" element={<PagePartnerOrganizations />} />
              <Route path="/lectures" element={<LecturesPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
};
