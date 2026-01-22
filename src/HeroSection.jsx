import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  return (
    <div className="text-center bg-white py-10 px-4">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <span className="mx-auto px-3 py-1 rounded-full bg-blue-100 font-medium text-amber-600 text-sm">
          No.1 job hunt website
        </span>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          search, apply &<br />
          Get your <span className="text-fuchsia-900">Dream job</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit officiis aperiam ipsam eius nulla nam, culpa fugit ut
          recusandae tenetur ex quae voluptate mollitia aliquid aspernatur aut.
          Eos, reiciendis?
        </p>

        <div className="flex w-full max-w-md mx-auto bg-white rounded-full shadow-md border border-gray-300 overflow-hidden">
          <input
            type="text"
            placeholder="Find your Dream jobs"
            className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none bg-transparent"
          />
          <button className="px-4 py-2 bg-[#6A38c2] text-white hover:bg-[#5a2db0] transition rounded-full">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;