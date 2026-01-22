import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User as UserIcon, LogOut } from "lucide-react"
function AuthLayout() {

  const user = true // Change to true when logged in

  return (
    <>
      <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
          {/* Logo */}
          <div>
            <h1 className='text-2xl font-bold'>
              job <span style={{ color: '#F83002' }}>portal</span>
            </h1>
          </div>

          {/* Navigation */}
          <div className='flex items-center gap-12'>
            <ul className='flex font-medium items-center gap-5'>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Jobs">Jobs</Link></li>
              <li><Link to="/Browse">Browse</Link></li>
            </ul>

            {/* Auth Section */}
            {!user ? (
              <div className="flex gap-4">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-blue-900 hover:bg-blue-950 text-white">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer w-10 h-10 rounded-full overflow-hidden bg-white">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback className="bg-white text-black">A</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>

                  <PopoverContent className="w-64 p-4 bg-white rounded shadow">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="w-10 h-10 rounded-full overflow-hidden bg-white">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          className="object-cover w-full h-full"
                        />
                        <AvatarFallback className="bg-white text-black">A</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-lg">Aryan Kadiyan</h4>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="link" className="flex items-center gap-2 text-blue-600">
                        <UserIcon className="w-4 h-4" />
                        <Link to="/profile"> View Profile</Link>
                       
                      </Button>
                      <Button variant="link" className="flex items-center gap-2 text-red-600">
                        <LogOut className="w-4 h-4" />
                        Logout
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>
      </div>

   
      <Outlet />
    </>
  )
}
  
export default AuthLayout