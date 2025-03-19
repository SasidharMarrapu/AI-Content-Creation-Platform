import { useContext } from "react"
import AuthContext from "../context/AuthContext";
import { images } from "../constants/images";

export default function DashboardHeader() {
    const { user }:any = useContext(AuthContext);
    
    return (
        <div className="w-[80%] fixed top-0 bg-white h-14 border-b border-neutral-200 flex items-center justify-between px-5 ">
           <div>
           {user ?  <h2 className="text-md font-medium">Welcome Back,  Leela Manohar<span className="text-xl">👋</span></h2> : 
            <h2 className="text-md font-medium">Welcome Back,👋</h2>}
           </div>

           <div>
            <button className="bg-gradient-to-r from-blue-400  to-rose-500 text-white px-5 py-2 rounded-full flex items-center justify-center gap-1.5 cursor-pointer">
                <div className="flex items-center justify-center gap-1">
                <h5 className="text-xs">Buy Credits</h5>
                <img src={images.stars} alt="" className="w-5" />
                </div>
            </button>
           </div>
        </div>
    );
}