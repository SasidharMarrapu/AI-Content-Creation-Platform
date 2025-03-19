import { Home, Image, MessageCircle, Settings, User, Video } from "lucide-react";

type ComponentType = "Home" | "ImageGeneration" | "TextGeneration" | "VideoGeneration" | "Profile" | "Settings";

interface NavItem {
  id: number;
  name: string;
  icon: React.ElementType;
  component: ComponentType;
}

const nav_items:NavItem[] = [
    {
        id: 1,
        icon: Home,
        name: 'Home',
        component: 'Home'
    },
    {
        id: 1,
        icon: MessageCircle,
        name: 'Chat with AI',
        component: 'TextGeneration'
    },
    {
        id: 1,
        icon: Image,
        name: 'Text to Image',
        component: 'ImageGeneration'
    },
    {
        id: 1,
        icon: Video,
        name: 'Text to Video',
        component: 'VideoGeneration'
    },
    {
        id: 1,
        icon: User,
        name: 'Profile',
        component: 'Profile'
    },
    {
        id: 1,
        icon: Settings,
        name: 'Settings',
        component: 'Settings'
    },
]

export default nav_items;