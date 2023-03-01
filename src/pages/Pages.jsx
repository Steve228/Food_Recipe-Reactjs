import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Cuisines from "./Cuisines";
import Searched from "./Searched";
import Recipe from "./Recipe";


const Pages = () => {
  const location = useLocation();

  return (
    
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    
  );
};

export default Pages;