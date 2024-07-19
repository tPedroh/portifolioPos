import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './components/pages/Home'
import Service from './components/pages/Service'
import NewService from './components/pages/NewService'
import NewOpnion from './components/pages/NewOpnion'
import Contact from './components/pages/Contact'
import Opnion from './components/pages/Opnion'

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/service" exact element={<Service />} />
            <Route path="/opnion" exact element={<Opnion />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/newservice" exact element={<NewService />} />
            <Route path="/newopnion" exact element={<NewOpnion />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
    
  );
}

export default App;
