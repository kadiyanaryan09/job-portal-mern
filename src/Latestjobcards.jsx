import React from "react";

const Latestjobcards = () => {
  return (
    <div className=" p-6 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Company Name</h1>
        <p className="text-gray-600">India</p>
      </div>
      <div>
        <h1 className="text-lg font-medium text-gray-800">Job Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-blue-700 font-bold text-sm">
          12 Positions
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-fuchsia-900 font-bold text-sm">
          Part time
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-sm">
          24LPA
        </span>
      </div>
    </div>
  );
};

export default Latestjobcards;