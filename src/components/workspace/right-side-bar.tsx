import { FC } from 'react';
import {
  HiSearch,
  HiUserGroup,
} from 'react-icons/hi';
import { AiOutlineBell } from 'react-icons/ai';
import { VscColorMode } from 'react-icons/vsc';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const RightSideBar: FC = () => {
  return (
    <div className="flex flex-col h-[500px] w-16 bg-white border-r rounded-lg">
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="mb-6">
          <AiOutlineBell className="text-2xl text-gray-600" />
        </div>
        <div className="mb-6">
          <VscColorMode className="text-2xl text-gray-600" />
        </div>
        <div className="mb-6">
          <HiSearch className="text-2xl text-gray-600" />
        </div>
        <div className="mb-6">
          <HiUserGroup className="text-2xl text-gray-600" />
        </div>
        <div>
          <IoChatbubbleEllipsesOutline className="text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
