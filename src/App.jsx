import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import WhoWeAre from './components/WhoWeAre';
import GetInvolved from './components/GetInvolved';
import Affiliates from './components/Affiliates';

export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/affiliates" element={<Affiliates />} />
      </Routes>
    </Router>
  );
}