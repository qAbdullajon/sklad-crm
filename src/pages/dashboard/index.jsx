import React from "react";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  CloudUpload,
  MoveUp,
  Paperclip,
} from "lucide-react";
import Avatar1 from "@assets/avatar1.png";
import { NavLink } from "react-router-dom";
import { dashboardProducts, dashboardUsers, nearestEvents } from "../../utils";
import ProductImage from "@assets/product-img.png";

export default function Dashboard() {
  const percent = 60;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <>
      <div>
        <p className="text-base text-muted pb-2.5">Welcome back, Evan!</p>
        <div className="flex items-center justify-between pb-7">
          <p className="text-color text-4xl font-bold">Dashboard</p>
          <div className="flex items-center gap-3.5 text-color px-4 py-2.5 bg-[#e6edf5] rounded-[14px]">
            <Calendar />
            <span>Nov 16, 2020 - Dec 16, 2020</span>
          </div>
        </div>

        <div className="flex w-full gap-[30px] justify-between">
          {/* WORKLOAD */}
          <div className="max-w-[880px] w-full">
            <div className="bg-white pt-7 pb-4 px-[18px] rounded-3xl">
              <div className="flex items-center justify-between pb-5">
                <p className="text-color text-[22px] font-bold">Workload</p>
                <NavLink
                  to={"#"}
                  className="text-base font-semibold text-[#3F8CFF] flex items-center gap-1"
                >
                  <span>View all</span>
                  <ChevronRight />
                </NavLink>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {dashboardUsers.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F4F9FD] rounded-3xl w-full py-[18px]"
                  >
                    <div className="relative w-[58px] h-[58px] mx-auto">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 60 60"
                      >
                        {/* Background ring */}
                        <circle
                          cx="30"
                          cy="30"
                          r="28"
                          fill="transparent"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        {/* Progress ring */}
                        <circle
                          cx="30"
                          cy="30"
                          r="28"
                          fill="transparent"
                          stroke="#3F8CFF"
                          strokeWidth="3"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* Avatar inside */}
                      <div className="absolute inset-[4px] bg-white rounded-full flex items-center justify-center">
                        <img
                          src={Avatar1}
                          alt="Avatar"
                          className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-base text-center font-bold pt-4 text-color">
                      {item.name}
                    </p>
                    <p className="text-sm text-center text-color pb-[9px]">
                      {item.job}
                    </p>
                    <p className="text-[12px] mx-auto font-semibold py-[3px] px-[4.5px] border text-muted rounded-[4px] border-[#7D8592] w-fit capitalize">
                      {item.levels}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between px-2.5 pt-12 pb-5">
              <p className="text-color text-[22px] font-bold">Products</p>
              <NavLink
                to={"#"}
                className="text-base font-semibold text-[#3F8CFF] flex items-center gap-1"
              >
                <span>View all</span>
                <ChevronRight />
              </NavLink>
            </div>
            <div className="flex flex-col gap-5">
              {dashboardProducts.map((item) => (
                <div
                  className="flex justify-between bg-white rounded-3xl h-[152px]"
                  key={item.id}
                >
                  <div className="pt-6 px-6 pb-[30px] w-1/2">
                    <div className="flex items-center gap-[18px]">
                      <img src={ProductImage} alt="ProductImage" />
                      <div>
                        <p className="text-[#91929E] text-base ">{item.pin}</p>
                        <p className="text-color text-lg font-bold">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    <div className="pt-[22px] flex justify-between items-center">
                      <p className="text-muted text-sm flex items-center gap-1.5">
                        <Calendar />
                        <span>{item.createdAt}</span>
                      </p>
                      {item.level === "medium" ? (
                        <p className="text-sm text-[#FFBD21] font-bold flex items-center gap-1 capitalize">
                          <ArrowUp />
                          <span>{item.level}</span>
                        </p>
                      ) : item.level === "low" ? (
                        <p className="text-sm text-[#0AC947] font-bold flex items-center gap-1 capitalize">
                          <ArrowDown />
                          <span>{item.level}</span>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="w-[1px] h-[152px] bg-[#E4E6E8]"></div>
                  <div className="w-1/2 px-11 pt-[30px]">
                    <p className="text-base text-color font-bold pb-4">
                      Project Data
                    </p>

                    <div className="flex gap-2 justify-between">
                      <div>
                        <p className="text-[#91929E] text-sm pb-1">All tasks</p>
                        <p className="text-base text-color font-bold">
                          {item.allTasks}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#91929E] text-sm pb-1">
                          Active tasks
                        </p>
                        <p className="text-base text-color font-bold">
                          {item.activeTasks}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#91929E] text-sm pb-1">All tasks</p>
                        <div className="flex items-center">
                          <img
                            src={Avatar1}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                          <img
                            src={Avatar1}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
                          />
                          <img
                            src={Avatar1}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
                          />
                          <div className="w-8 h-8 rounded-full bg-[#3F8CFF] border-2 border-white flex items-center justify-center text-xs text-white font-medium -ml-2">
                            +2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="w-[339px]">
            <div className="px-5 py-7 bg-white rounded-3xl">
              <div className="flex items-center justify-between pb-6">
                <p className="text-color text-[22px] font-bold">Nearest Events</p>
                <NavLink
                  to={"/dashboard/nearest-events"}
                  className="text-base font-semibold text-[#3F8CFF] flex items-center gap-1"
                >
                  <span>View all</span>
                  <ChevronRight />
                </NavLink>
              </div>
              <div className="flex flex-col gap-6">
                {nearestEvents.slice(0,3).map((item) => (
                  <div className="flex gap-4 h-[110px]" key={item.id}>
                    <div
                      className={`w-1 h-full rounded-[2px] ${
                        item.level === "top" ? "bg-[#3F8CFF]" : "bg-[#DE92EB]"
                      }`}
                    ></div>
                    <div className="w-full flex flex-col justify-between">
                      <div className="flex items-start justify-between pb-[9px]">
                        <p className="text-base text-color font-bold">
                          {item.name}
                        </p>
                        {item.level === "top" ? (
                          <ArrowUp color="#FFBD21" />
                        ) : (
                          <ArrowDown color="#0AC947" />
                        )}
                      </div>
                      <div className="flex justify-between items-center pb-1">
                        <p className="text-sm text-[#91929E]">
                          {item.createdAt}
                        </p>
                        <div className="text-[#7D8592] text-[12px] flex items-center gap-1.5 py-1.5 px-2 bg-[#F4F9FD] rounded-lg">
                          <Clock />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-11 px-6 py-7 bg-white rounded-3xl">
              <p className="text-[22px] pb-6 text-color font-bold">
                Activity Stream
              </p>

              <div className="flex items-center gap-[18px]">
                <img className="w-[50px] h-[50px]" src={Avatar1} alt="avatar" />
                <div>
                  <p className="text-base text-color font-bold">
                    Oscar Holloway
                  </p>
                  <p className="text-sm text-[#91929E] ">UI/UX Designer</p>
                </div>
              </div>

              <div className="py-[15px] pl-5 pr-2.5 flex gap-4 bg-[#F4F9FD] rounded-[14px] mt-[18px]">
                <CloudUpload color="#3F8CFF" strokeWidth={3} size={32} />
                <p className="text-color text-sm">
                  Updated the status of Mind Map task to In Progress
                </p>
              </div>
              <div className="flex gap-4 bg-[#F4F9FD] rounded-[14px] py-4 px-5 mt-4">
                <Paperclip color="#6D5DD3" />
                <p>Attached files to the task</p>
              </div>

              <div className="flex items-center gap-[18px] pt-[30px]">
                <img className="w-[50px] h-[50px]" src={Avatar1} alt="avatar" />
                <div>
                  <p className="text-base text-color font-bold">Emily Tyler</p>
                  <p className="text-sm text-[#91929E] ">Copywriter</p>
                </div>
              </div>

              <div className="py-[15px] pl-5 pr-2.5 flex gap-4 bg-[#F4F9FD] rounded-[14px] mt-[18px]">
                <CloudUpload color="#3F8CFF" strokeWidth={3} size={32} />
                <p className="text-color text-sm">
                  Updated the status of Mind Map task to In Progress
                </p>
              </div>

              <button className="cursor-pointer mx-auto flex items-center mt-5 text-[#3F8CFF] font-bold text-base">
                <p>View more</p>
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
