import { images } from "../constants/images";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import nav_items from "../constants/nav_items";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import ActiveComponentContext from "../context/ActiveComponentContext";
import { useContext } from "react";

export default function Sidebar() {
  const { activeComponent, setActiveComponent } = useContext(ActiveComponentContext);

  return (
    <div
      className="w-[20%] h-screen border-r border-neutral-200 p-5 bg-white fixed 
    top-0 left-0 overflow-hidden"
    >
      <div className="w-full flex items-center justify-start">
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <img src={images.stars} alt="Create.ai" className="w-5" />
          <h2 className="text-lg font-semibold text-black">Create.ai</h2>
        </div>
      </div>

      <div className="mt-10">
        {nav_items.map((item) => (
          <div
            className={`w-full flex items-center justify-start gap-2 cursor-pointer px-4 py-3 rounded-md mb-5 ${
              activeComponent === item.component &&
              "bg-neutral-100/75 shadow-sm"
            }`}
            key={item.id}
            onClick={() => setActiveComponent(item.component)}
          >
            <item.icon size={20} className="text-neutral-500" />
            <h5 className="font-medium text-xs">{item.name}</h5>
          </div>
        ))}
      </div>

      <div className="w-full mt-32">
        <div className="w-full h-28 rounded-xl bg-gradient-to-r from-blue-400  to-rose-400 text-white px-6 py-4">
          <div className="flex items-center justify-start">
          <h4 className="font-semibold">Credits</h4>
          <img src={images.stars} alt="stars" className="w-5" />
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full my-2">
            <div
              className={`w-[68%] h-full bg-white rounded-full shadow`}
            ></div>
          </div>
          <h5 className="text-sm">6800/10000 credits used</h5>
        </div>
        <div className="mt-3">
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
            <div className="w-full bg-neutral-100 py-2 rounded-md text-xs font-medium text-purple-700 cursor-pointer border">
            Upgrade
          </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Choose Your Subscription Plan</AlertDialogTitle>
                <AlertDialogDescription>
                  
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="">Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="w-[88%] absolute bottom-5 h-14 flex items-center justify-between p-2 gap-3 cursor-pointer rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-purple-900 w-9 h-9 rounded-full flex items-center justify-center ">
            <h3 className="text-md text-white font-semibold">L</h3>
          </div>
          <div>
            <h3 className="text-xs font-semibold">Leela Manohar Gudivada</h3>
            <h4 className="text-[10px] font-medium mt-1">
              Free Plan
            </h4>
          </div>
        </div>
        <div>
          <HiMiniChevronUpDown size={20} />
        </div>
      </div>
    </div>
  );
}
