import { FaRegImage } from "react-icons/fa6";
import { BsChatText } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const Recommedations = [
    {id: 1, name: 'AI Image Generation', icon: FaRegImage, color: 'purple-500', isActive: false},
    {id: 2, name: 'Text Generation', icon: BsChatText, color: 'yellow-500', isActive: false},
    {id: 3, name: 'AI Video Generation', icon: IoVideocam, color: 'rose-500', isActive: false},
    {id: 4, name: 'AI Chatbot', icon: BsRobot, color: 'teal-600', isActive: false},
    {id: 5, name: 'AI Coding Assistant', icon: FaCode, color: 'teal-600', isActive: false},
]

export default Recommedations;