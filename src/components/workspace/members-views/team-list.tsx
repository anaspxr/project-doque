import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

interface Team {
    name: string;
    email: string;
    img: string;
}

const TeamsList: React.FC<{ teams: Team[] }> = ({ teams }) => {
    return (
        <ul className="space-y-4">
            {teams.map((team, index) => (
                <li key={index} className=" rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center justify-between space-x-11">
                        <img className='w-9 h-9 rounded-lg object-cover' src={team.img} alt={team.name} />
                        
                            <h3 className="text-md font-semibold text-gray-700">{team.name}</h3>
                            <p className="text-sm text-gray-500">{team.email}</p>
                        
                    </div>
                    <div className='flex space-x-5 text-gray-600'>
                        <MdPeopleAlt className="text-xl cursor-pointer mt-0.5 hover:text-blue-500" title="View Members" />
                        <FaEdit className="text-xl cursor-pointer hover:text-blue-500" title="Edit Team" />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TeamsList;
