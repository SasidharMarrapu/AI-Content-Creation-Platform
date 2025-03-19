import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}