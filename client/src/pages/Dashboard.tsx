import { BiPlus } from "react-icons/bi";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { ImMagicWand } from "react-icons/im";
import ImageGeneration from "../components/ImageGeneration";
import { useState } from "react";
import Settings from "../components/Settings";
import Profile from "../components/Profile";

export default function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("Home");
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[25%]">
            <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            </div>
            <div className="w-full bg-white">
                <DashboardHeader />

                <div className="w-full mt-14">
                {activeComponent === "ImageGeneration" && <ImageGeneration />}
                {activeComponent === "Profile" && <Profile />}
                {activeComponent === "Settings" && <Settings />}
                </div>
            </div>
        </div>
    )
}