import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Layouts/Wrapper";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EnrollNow from "./pages/EnrollNow";
import Careers from "./pages/Careers";
import Certification from "./pages/Certification";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import AiMl from "./pages/services/AiMl";
import CloudComputing from "./pages/services/CloudComputing";
import Cybersecurity from "./pages/services/Cybersecurity";
import TechnicalTraining from "./pages/services/TechnicalTraining";
import Internships from "./pages/services/Internships";

function App() {
  return (
    <Wrapper>
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ai-ml" element={<AiMl />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route
          path="/services/technical-training"
          element={<TechnicalTraining />}
        />
        <Route path="/services/internships" element={<Internships />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
