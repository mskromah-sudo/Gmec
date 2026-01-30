import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
  Navigate,
  useLocation,
} from 'react-router-dom';
// Public Pages
import PublicLayout from './components/PublicLayout';
import Home from './pages/Home';
import Subsidiaries from './pages/Subsidiaries';
import Services from './pages/Services';
import Sustainability from './pages/Sustainability';
import Governance from './pages/Governance';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import StoneCrestResource from './pages/StoneCrestResource';
import StoneCrestMining from './pages/StoneCrestMining';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import History from './pages/History';
import OurTeam from './pages/OurTeam';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const Website: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/projects-services" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/subsidiaries/stonecrest-resource"
            element={<StoneCrestResource />}
          />
          <Route
            path="/subsidiaries/stonecrest-mining"
            element={<StoneCrestMining />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/history" element={<History />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Website;
