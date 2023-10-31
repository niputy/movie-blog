import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { BrowserRouter as Router,
        Routes,
        Route 
        } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app"> 
        <Navbar />

        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
