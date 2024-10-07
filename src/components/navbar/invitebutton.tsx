'use client';
import React from 'react';
import { LuUserPlus } from 'react-icons/lu';
import { Button } from '../ui/button';

export default function InviteButton() {
    return (
        <Button className="px-6 py-3 bg-[#EDF1F4] text-black text-lg rounded-3xl hover:bg-[#EDF1F4]/90 mr-6 flex items-center shadow-lg">
            Invite
            <LuUserPlus className="ml-2 w-5 h-5" />
        </Button>
    );
};
