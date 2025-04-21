import {
  Calendar,
  FolderOpen,
  Layers,
  LayoutGrid,
  MessageCircleMore,
  Plane,
  Users,
} from "lucide-react";

export const layoutNav = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
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
    time: '4h'
  },
  {
    id: 2,
    name: "Anna’s Birthday",
    level: "bottom",
    createdAt: "Today | 5:00 PM",
    time: '4h'
  },
  {
    id: 3,
    name: "Ray’s Birthday",
    level: "bottom",
    createdAt: "Today | 5:00 PM",
    time: '4h'
  },
]