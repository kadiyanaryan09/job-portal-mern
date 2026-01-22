import React from 'react'
// import { Label } from "@/components/ui/label"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
const FilterData = [
  {
    filtertype: 'Location',
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filtertype: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
  },
  {
    filtertype: "Salary",
    array: ["0–40k", "42k–11 Lakh", "1 Lakh to 5 Lakh"]
  }
];

const Filtercard = () => {

  return (
   <div className="p-4">
  <h1 className="text-lg font-semibold text-left">Filter Jobs</h1>
  <hr className="mt-3 mb-4" />

  {/* Container aligned to extreme left */}
  <div className="flex justify-start">
<div>
 <RadioGroup>
  {FilterData.map((elem, index) => (
    <div className="mb-6" key={index}>
      <h2 className="text-md font-bold mb-2">{elem.filtertype}</h2>
      {elem.array.map((elem, index) => (
        <div className="flex items-center gap-2 mb-2" key={index}>
          <RadioGroupItem value={elem}  />
          <Label className="text-sm">{elem}</Label>
        </div>
      ))}
    </div>
  ))}
</RadioGroup>
</div>
    </div>
  </div>


      
  )
}

export default Filtercard
