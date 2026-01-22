import React from 'react';
import Navbar from './Navbar';
import Job from './Job';

const Browse = () => {
  const randomjobs = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="text-2xl mb-6 text-left font-medium">
          Search Results ({randomjobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {randomjobs.map((elem, index) => (<div className="rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white p-6 my-8 mx-4">
            <Job  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;