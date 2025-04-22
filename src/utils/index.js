import {
  Building2,
  Calendar,
  FolderOpen,
  Gift,
  Layers,
  LayoutGrid,
  MessageCircleMore,
  Plane,
  Tv,
  Users,
} from "lucide-react";

export const layoutNav = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutGrid,
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
    icon: Layers,
  },
  {
    id: 3,
    name: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    id: 4,
    name: "Vacations",
    path: "/vacations",
    icon: Plane,
  },
  {
    id: 5,
    name: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    id: 6,
    name: "Messenger",
    path: "/messenger",
    icon: MessageCircleMore,
  },
  {
    id: 7,
    name: "Info Portal",
    path: "/info-portal",
    icon: FolderOpen,
  },
];

export const dashboardUsers = [
  {
    id: 1,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 2,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "junior",
  },
  {
    id: 3,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 4,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 5,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 6,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 7,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  },
  {
    id: 8,
    name: "Shawn Stone",
    job: "UI/UX Designer",
    levels: "middle",
  }
];

export const dashboardProducts = [
  {
    id: 1,
    pin: 'PN0001265',
    name: "Medical App (iOS native)",
    createdAt: "Created Sep 12, 2020",
    level: 'medium',
    allTasks: 34,
    activeTasks: 13,
    assignees: 5
  },
  {
    id: 2,
    pin: 'PN0001221',
    name: "Food Delivery Service",
    createdAt: "Created Sep 12, 2020",
    level: 'medium',
    allTasks: 50,
    activeTasks: 24,
    assignees: 3
  },
  {
    id: 3,
    pin: 'PN0001265',
    name: "Food Delivery Service",
    createdAt: "Created Sep 12, 2020",
    level: 'low',
    allTasks: 23,
    activeTasks: 20,
    assignees: 8
  },
]

export const nearestEvents = [
  {
    id: 1,
    name: "Presentation of the new department",
    level: "top",
    createdAt: "Today | 5:00 PM",
    time: '4h',
    icon: Building2,
    color: "#3F8CFF"
  },
  {
    id: 2,
    name: "Anna’s Birthday",
    level: "bottom",
    createdAt: "Today | 5:00 PM",
    time: '4h',
    icon: Gift,
    color: "#DE92EB"
  },
  {
    id: 3,
    name: "Meeting with Development Team",
    level: "bottom",
    createdAt: "Today | 5:00 PM",
    time: '4h',
    icon: Users,
    color: "#fdc748"
  },
  {
    id: 4,
    name: "Ray’s Birthday",
    level: "bottom",
    createdAt: "Tomorrow | 2:00 PM",
    time: '1h 30min',
    icon: Gift,
    color: "#DE92EB"
  },
  {
    id: 5,
    name: "Meeting with CEO",
    level: "top",
    createdAt: "Sep 14 | 5:00 PM",
    time: '1h',
    icon: Building2,
    color: "#3F8CFF"
  },
  {
    id: 6,
    name: "Movie night (Tenet)",
    level: "bottom",
    createdAt: "Sep 15 | 5:00 PM",
    time: '3h',
    icon: Tv,
    color: "#6D5DD3"
  },
  {
    id: 7,
    name: "Lucas’s Birthday",
    level: "bottom",
    createdAt: "Sep 29 | 5:30 PM",
    time: '2h',
    icon: Gift,
    color: "#DE92EB"
  },
  {
    id: 8,
    name: "Meeting with CTO",
    level: "top",
    createdAt: "Sep 14 | 5:00 PM",
    time: '1h',
    icon: Building2,
    color: "#3F8CFF"
  },
]