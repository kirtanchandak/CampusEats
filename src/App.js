import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import Profile from "./pages/Profile";
import ShopListBySlug from "./pages/College";
import Shops from "./pages/Shops";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="deals/:slug" element={<ShopListBySlug />} />
        <Route path="deals/:slug/:shop" element={<Shops />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
