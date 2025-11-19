import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="p182/" element={<Home />} />
        <Route path="p182/who-we-are" element={<WhoWeAre />} />
        <Route path="p182/get-involved" element={<GetInvolved />} />
        <Route path="p182/affiliates" element={<Affiliates />} />
      </Routes>
    </Router>
  );
}