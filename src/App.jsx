import Container from "./components/core/Container";
import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import Home from "./pages/Home";
import Wheel from "./pages/Wheel";
import Settings from "./pages/Settings";
import WatchList from "./pages/WatchList";
import { BrowserRouter as Router,
        Routes,
        Route 
        } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './context/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app"> 
          <Navbar />

          <Container>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/wheel" element={<Wheel />}/>
              <Route path="/watch-list" element={<WatchList />}/>
              <Route path="/settings" element={<Settings />}/>
            </Routes>
          </Container>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
