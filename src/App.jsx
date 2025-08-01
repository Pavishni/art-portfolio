import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-['EB_Garamond']">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
