import { ArrowDown, ArrowUp, Clock, MoveLeft, Plus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { nearestEvents } from "../../utils";
import { useDashboardEventStore } from "../../hooks/useModalStore";

const ModalContent = () => {
  return <div>salom</div>;
};

export default function NearestEvents() {
  const { openModal } = useDashboardEventStore();
  const handleAddEvent = () => {
    openModal(<ModalContent />, "Add Event", "top");
  };

  return (
    <>
      <div>
        <NavLink
          to={"/dashboard"}
          className="text-base text-[#3F8CFF] flex items-center gap-2"
        >
          <MoveLeft />
          <span>Back to Dashboard</span>
        </NavLink>
        <div className="pt-2 flex items-center justify-between">
          <p className="text-color text-4xl font-bold">Nearest Events</p>
          <button
            onClick={handleAddEvent}
            className="cursor-pointer text-white text-base font-bold flex items-center gap-2 px-6 py-[13px] bg-[#3F8CFF] rounded-[14px]"
          >
            <Plus />
            <span>Add Event</span>
          </button>
        </div>
        <div className="pt-7 grid grid-cols-2 gap-[30px]">
          {nearestEvents.map((item) => {
            let Icon = item.icon;
            return (
              <div
                className="p-6 h-[130px] flex gap-[18px] bg-white rounded-3xl"
                key={item.id}
              >
                <div
                  className={`w-1 h-full rounded-[2px]`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="w-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2.5 items-center text-base font-bold text-color">
                      <Icon color={item.color} />
                      <p>{item.name}</p>
                    </div>
                    {item.level === "top" ? (
                      <ArrowUp color="#FFBD21" />
                    ) : (
                      <ArrowDown color="#0AC947" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#91929E] text-sm">{item.createdAt}</p>
                    <div className="text-[#7D8592] text-sm font-bold flex items-center gap-1.5 px-2 py-1.5 bg-[#F4F9FD] rounded-lg">
                      <Clock size={18} strokeWidth={3} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
