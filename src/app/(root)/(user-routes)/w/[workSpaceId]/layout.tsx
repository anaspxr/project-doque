import Sidebar from '@/components/workspace/sidebar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex'>
      <Sidebar/>
      {children}
    </div>
  )
}
