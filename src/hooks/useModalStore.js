import { create } from "zustand";

export const useDashboardEventStore = create((set) => ({
  isOpen: false,
  content: null,
  title: null,
  position: "center", // 'center' | 'right' | 'middle'
  openModal: (content, title, position = "center") =>
    set({ isOpen: true, content, position, title }),
  closeModal: () => set({ isOpen: false, title: null, content: null }),
}));
