import { useState } from "react";
import { images } from "../constants/images";
import Recommedations from "../constants/Recommendations";

export default function Recommendations() {
    const [recommedations, setRecommendations] = useState(Recommedations);

    const toggleActive = (index) => {
        setRecommendations((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, isActive: !item.isActive } : item
            )
          );
    }
    
    return  (
        <div className="w-ful h-screen flex items-center justify-center bg-neutral-100">
            <div className="w-[50%] flex flex-col items-center justify-center bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm gap-5">
            <h3 className="text-2xl font-bold">What are you Looking For?</h3>
            <div className="grid grid-cols-3 items-center justify-center mt-5 gap-x-5 gap-y-8">
               {recommedations.map((item, index) => {
                return (
                    <div key={index} className={`flex items-center justify-center gap-2 border rounded-lg px-5 py-3 cursor-pointer shadow-sm ${item.isActive ? 'border-black' : 'border-neutral-300'}`} 
                    onClick={() => toggleActive(index)}
                    >
                    <item.icon className={`text-${item.color}`} />
                    <h4 className="text-xs font-semibold">{item.name}</h4>
                </div>
                  )
               })}
            </div>
            <div className="w-[50%]">
                <button className="bg-black border shadow-sm w-full text-white py-2.5 px-10 rounded-lg text-xs cursor-pointer">Continue</button>
            </div>
            </div>
        </div>
    )
}