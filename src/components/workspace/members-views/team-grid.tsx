import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

interface Team {
  name: string;
  email: string;
  img: string;
}

const TeamsGrid: React.FC<{ teams: Team[] }> = ({ teams }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {teams.map((team, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center border-b-2 border-gray-300 pb-4 mb-4">
            <Image
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
              src={team.img}
              alt={team.name}
            />
            <h1 className="text-lg font-semibold text-gray-800 mt-2 text-center">
              {team.name}
            </h1>
            <p className="text-sm text-gray-500 text-center">{team.email}</p>
          </div>
          <div className="flex justify-end space-x-5">
            <MdPeopleAlt
              className="text-gray-600 text-xl mt-0.5 cursor-pointer hover:text-blue-500"
              title="View Members"
            />
            <FaEdit
              className="text-gray-600 text-xl cursor-pointer hover:text-blue-500"
              title="Edit Team"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsGrid;
