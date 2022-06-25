import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Services from './screens/Services';
import Enquiry from './screens/Enquiry';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
}

export default App;
