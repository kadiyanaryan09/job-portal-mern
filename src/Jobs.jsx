import React from 'react';
import Navbar from './Navbar';
import Filtercard from './Filtercard';
import Job from './Job';

const Randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Horizontal layout: Filter on left, jobs on right */}
        <div className="flex gap-6">
          
          {/* Filter Sidebar */}
          <div className="w-64">
            <Filtercard />
          </div>

          {/* Job Cards Section */}
          <div className="flex-1">
            {Randomjobs.length <= 0 ? (
              <div className="text-gray-400 text-center mt-10">
                No jobs found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Randomjobs.map((elem, index) => (
                  <div key={index} className="rounded-lg shadow hover:shadow-lg transition">
                    <Job data={elem} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;