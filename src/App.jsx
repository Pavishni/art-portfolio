import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import CategoryDetails from "./components/CategoryDetails.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories/:catId" element={<CategoryDetails />} />
    </Routes>
  );
};

export default App;
