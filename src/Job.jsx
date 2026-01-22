import React from 'react';
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; // ✅ Import Badge

const Job = () => {
  return (
    <div className="text-zinc-900 p-4 rounded-lg w-full max-w-sm">
      
      {/* Top Row: Timestamp + Bookmark */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-400">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Bottom Row: Avatar Button + Company Info */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="p-0 rounded-full h-auto w-auto">
          <Avatar className="bg-transparent">
            <AvatarImage
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              alt="Company logo"
              className="w-10 h-10 rounded-full"
            />
          </Avatar>
        </Button>

        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm">Companies</p>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-2 flex-wrap">
        <Badge className="text-blue-700 font-bold" variant="ghost">12 positions</Badge>
        <Badge className="text-[#f83002] font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-blue-700 font-bold" variant="ghost">24 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant='outline'>Details</Button>
       <Button className="bg-fuchsia-800 w-28">save for later</Button>
      </div>
    </div>
  );
};

export default Job;