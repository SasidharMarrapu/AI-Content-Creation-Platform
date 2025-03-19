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

interface SidebarProps {
  setActiveComponent: (
    component:
      | "Home"
      | "ImageGeneration"
      | "TextGeneration"
      | "VideoGeneration"
      | "Profile"
      | "Settings"
  ) => void;
  activeComponent:
    | "ImageGeneration"
    | "TextGeneration"
    | "Home"
    | "VideoGeneration"
    | "Profile"
    | "Settings";
}

export default function Sidebar({
  activeComponent,
  setActiveComponent,
}: SidebarProps) {
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
            className={`w-full flex items-center justify-start gap-2 cursor-pointer px-4 py-3 rounded-xl mb-5 ${
              activeComponent === item.component &&
              "bg-neutral-100/75 shadow-sm"
            }`}
            key={item.id}
            onClick={() => setActiveComponent(item.component)}
          >
            <item.icon size={20} />
            <h5 className="font-medium text-sm">{item.name}</h5>
          </div>
        ))}
      </div>

      <div className="w-full mt-32">
        <div className="w-full h-28 rounded-xl bg-gradient-to-r from-blue-400  to-rose-500 text-white px-6 py-4">
          <h4 className="font-semibold">Credits</h4>
          <div className="h-2 w-full bg-purple-200 rounded-full my-2">
            <div
              className={`w-[40%] h-full bg-white rounded-full shadow`}
            ></div>
          </div>
          <h5 className="text-sm">6800/10000 credits used</h5>
        </div>
        <div className="mt-3">
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
            <button className="w-full bg-neutral-100 py-3 rounded-xl text-sm font-medium text-purple-700 cursor-pointer">
            Upgrade
          </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Choose Your Subscription Plan</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* <div className="w-full mt-10">
      <button className=" bg-gradient-to-r from-blue-400  to-rose-500 px-4 py-3 rounded-lg text-white shadow-xs flex items-center justify-center gap-2 cursor-pointer w-full">
          <ImMagicWand />
          <h5 className="text-xs">Ask Maha Ai</h5>
        </button>
      </div> */}

      <div className="w-[88%] absolute bottom-5 h-14 flex items-center justify-between p-2 gap-3 cursor-pointer rounded-lg hover:border  hover:border-neutral-200">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-purple-900 w-9 h-9 rounded-full flex items-center justify-center ">
            <h3 className="text-md text-white font-semibold">L</h3>
          </div>
          <div>
            <h3 className="text-xs font-semibold">Leela Manohar Gudivada</h3>
            <h4 className="text-[10px] font-semibold mt-1">
              leelamanohar.gudivada@gmail.com
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
