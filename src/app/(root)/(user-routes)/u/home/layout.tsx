import Sidebar from '@/components/user-home/sidebar'
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex'>
            <Sidebar />
            {children}
        </div>
    )
}
