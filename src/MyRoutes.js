import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./finalPages/Mainpage";
import Cart from "./finalPages/Cart";
import Item from "./components/Item";
import Items from "./components/Items";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Mainpage />} /> */}
        <Route path="/" element={<Items />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
