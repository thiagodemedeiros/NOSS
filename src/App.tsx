import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./feature/Home/Home";
import { PagePartnerOrganizations } from "./feature/PartnerOrganizations/page/PagePartnerOrganizations";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/partner-organizations/:id" element={<PagePartnerOrganizations />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
};
