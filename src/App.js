import "./App.css";
import Nav_bar from "./Component/navigationBar/Nav_bar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from "react-router-dom";

import Footer from "./Component/footer/Footer";
import Animated from "./Component/Aniamted/Animated";

const App = () => {
 


 
  return (
    <div >
      <BrowserRouter>
        <Nav_bar />
        <Animated  className="container"/>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
