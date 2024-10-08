'use client';
import React from 'react';
import { LuUserPlus } from 'react-icons/lu';
import { Button } from '../ui/button';

export default function InviteButton() {
    return (
        <Button className="px-4 py-2 bg-[#EDF1F4] text-black text-sm rounded-2xl hover:bg-[#EDF1F4]/90 mr-4 flex items-center shadow-md">
            Invite
            <LuUserPlus className="ml-1 w-3 h-3" />
        </Button>
    );
};
