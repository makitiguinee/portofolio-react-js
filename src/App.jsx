import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Service from "./components/Service/Service";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portofolio from "./components/Portofolio/Portofolio";
import Testemonial from "./components/Testemonial/Testemonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "../Context";
import { useContext } from "react";
import Boxe from "./components/ui/Boxe";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portofolio />
      <Testemonial />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
