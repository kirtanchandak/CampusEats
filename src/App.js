import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Shops from "./pages/Shops";
import ShopListByID from "./pages/College";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="deals/:college" element={<ShopListByID />} />
        <Route path="deals/:college/:shop" element={<Shops />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
