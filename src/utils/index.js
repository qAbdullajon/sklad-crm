import { Calendar, FolderOpen, Layers, LayoutGrid, MessageCircleMore, Plane, Users } from "lucide-react";

export const layoutNav = [
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        icon: LayoutGrid
    },
    {
        id: 2,
        name: "Products",
        path: "/products",
        icon: Layers
    },
    {
        id: 3,
        name: "Calendar",
        path: "/calendar",
        icon: Calendar
    },
    {
        id: 4,
        name: "Vacations",
        path: "/vacations",
        icon: Plane
    },
    {
        id: 5,
        name: "Employees",
        path: "/employees",
        icon: Users
    },
    {
        id: 6,
        name: "Messenger",
        path: "/messenger",
        icon: MessageCircleMore
    },
    {
        id: 7,
        name: "Info Portal",
        path: "/info-portal",
        icon: FolderOpen
    }
] 