import React from 'react';
import Navbar from './navbar';
import { Label } from './components/ui/label';
import { Avatar, AvatarImage } from './components/ui/avatar';
import { Button } from './components/ui/button';
import { Mail, Phone, Badge, Pen } from 'lucide-react';
import Appliedjobs from './ui/Appliedjobs'


const skills = ["JavaScript", "React", "HTML", "CSS"]; // You can set this to [] to test fallback
const isResume = true; // Toggle to false to test conditional rendering

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">

        {/* Avatar Section */}
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </div>

        {/* Bio Section */}
        <div className="mt-4">
          <h1 className="font-medium text-xl">Full Name</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vitae, officia voluptates error fugit velit sequi dolorum veritatis voluptas.
          </p>
        </div>

        {/* Edit Button */}
        <div className="mt-4 text-right">
          <Button variant="outline">
            <Pen className="w-4 h-4" />
          </Button>
        </div>

        {/* Contact Info */}
        <section className="mt-6 space-y-3 text-left" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-semibold text-lg">Contact Info</h2>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <span>kadiyan@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <span>7017524751</span>
          </div>
        </section>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2 text-left">Skills</h2>
          <div className="flex gap-2 flex-wrap">
            {skills.length !== 0 ? (
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 border rounded-full bg-gray-100 text-sm"
                >
                  <Badge className="w-4 h-4 text-gray-500" />
                  <span>{skill}</span>
                </div>
              ))
            ) : (
              <span className="text-sm text-gray-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@apatelmernstack"
              className="text-blue-600 underline"
            >
              View Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>

       
       

      </div>
       <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-8">
          <h2 className="font-semibold text-lg mb-2">Applied Jobs</h2>
          <Appliedjobs />
        </div>
    </div>
  );
};

export default Profile;