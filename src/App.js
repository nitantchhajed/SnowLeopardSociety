import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import "./css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Theme from "./contexts/ThemeContext";
import RoadMap from "./pages/RoadMap";
import Runway from "./pages/Runway";
import Upload from "./pages/Upload";
import SlsStory from "./pages/SlsStory";
import License from "./pages/License";
import FAQ from "./pages/faq";
import SHOP from './pages/Shop';
import Footer from "./components/Footer";
import TermAndCondition from "./pages/TermAndCondition";

function App() {
  // const [walletAddress,setWalletAddress] = React.useState('');
  return (
    <Router >
      <Theme>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/runway" element={<Runway />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/slsStory" element={<SlsStory />} />
            <Route path="/license" element={<License/>} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/termandconditions" element= {<TermAndCondition />} />
            <Route path="/shop" element={<SHOP />} />
          </Routes>
          <Footer />
        </div>
      </Theme>
    </Router>
  );
}

export default App;
