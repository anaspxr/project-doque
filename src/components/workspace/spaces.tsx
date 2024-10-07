import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface Space {
  id: number;
  name: string;
  projects: string[];
}

const Spaces: React.FC = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [showSpaceDetails, setShowSpaceDetails] = useState<{ [key: number]: boolean }>({});

  const toggleSpaceDetails = (spaceId: number) => {
    setShowSpaceDetails(prev => ({
      ...prev,
      [spaceId]: !prev[spaceId]
    }));
  };

  const addSpace = () => {
    const newSpaceId = spaces.length + 1;
    const newSpace: Space = { id: newSpaceId, name: `Space ${newSpaceId}`, projects: [] };
    setSpaces([...spaces, newSpace]);
  };

  // Add a new project to a specific space
  const addProject = (spaceId: number) => {
    setSpaces(prevSpaces => prevSpaces.map(space => 
      space.id === spaceId
        ? { ...space, projects: [...space.projects, `Project ${space.projects.length + 1}`] }
        : space
    ));
  };

  return (
    <div>
      <div className='mt-8 pb-4'>
        <div className='flex items-center justify-between border-b border-gray-500 pb-3'>
          <h3 className='font-semibold text-black'>Spaces</h3>
          <div className='flex items-center'>
            <IoSearchSharp className='text-lg text-black mr-3' />
            <FaPlus className='text-black cursor-pointer' onClick={addSpace} />
          </div>
        </div>

        <div className='mt-4'>
          {spaces.map(space => (
            <div key={space.id}>
              <div className='flex justify-between items-center p-2 hover:border-l-8 cursor-pointer'>
                <h2 className='font-medium text-sm text-black'>{space.name}</h2>
                <div className='flex items-center'>
                  <FaPlus className='text-black mr-2 cursor-pointer' onClick={() => addProject(space.id)} />                  
                  <IoIosArrowDown
                    className={`text-black cursor-pointer ${showSpaceDetails[space.id] ? 'transform rotate-180' : ''}`}
                    onClick={() => toggleSpaceDetails(space.id)}
                  />
                </div>
              </div>
              {showSpaceDetails[space.id] && (
                <div className='mt-2 ml-4'>
                  {space.projects.map((project, index) => (
                    <div key={index} className='flex justify-between items-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer'>
                      <h2 className='font-medium text-black'>{project}</h2>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spaces;
