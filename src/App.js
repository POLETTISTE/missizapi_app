// import "./style.scss";
import Nav from "../src/components/Navbar";
import Accueil from "../src/pages/Accueil";
import Concept from "../src/pages/Concept";
import Prestations from "../src/pages/Prestations";
import Contact from "../src/pages/Contact";
import Rdv from "../src/pages/Rdv";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route exact path="/accueil" element={<Accueil />}></Route>
          <Route exact path="/concept" element={<Concept />}></Route>
          <Route exact path="/prestations" element={<Prestations />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/rdv" element={<Rdv />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
