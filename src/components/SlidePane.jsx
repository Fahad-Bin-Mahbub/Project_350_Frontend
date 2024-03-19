import React from "react";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

const SlidePane = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[680px] min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between px-8 py-3">
              <button className="btn btn-sm bg-[#E6F8F1] border-[#40856A] text-[#40856A]">
                Completed
              </button>
              <button>x</button>
            </div>
            <div className="border border-slate-300 w-full"></div>
            <form action="" className="flex flex-col gap-12 py-16 px-12">
              <div>
                <input
                  type="text"
                  placeholder="Course Title"
                  className="input input-ghost w-full text-4xl font-medium"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="w-20 font-bold text-base">Assignee</label>
                <div className="inline-flex justify-between">
                  <FaUserCircle size={44} style={{ color: "#C3C3C3" }} />
                  <input
                    type="text"
                    placeholder="No Assignee"
                    className="input input-ghost w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="w-20 font-bold text-base">Due Date</label>
                <div className="inline-flex justify-between items-center">
                  <input
                    type="date"
                    placeholder="No Due Date"
                    className="input input-ghost w-full max-w-xs mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="w-20 font-bold text-base">Exam</label>
                <input
                  type="text"
                  placeholder="Semester"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="w-20 font-bold text-base">Part</label>

                <select className="input input-ghost w-full max-w-xs">
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center">
                <label className="w-20 font-bold text-base">Total papers</label>
                <input
                  type="text"
                  placeholder="150"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
            </form>
            <div>
              <div
                tabIndex={0}
                className="collapse border border-base-300 bg-white"
              >
                <div className="collapse-title text-xl font-medium">
                  Comments
                </div>
                <div className="collapse-content">
                  <p>
                    tabIndex={0} attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SlidePane;
