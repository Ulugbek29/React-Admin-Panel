import React from 'react'

export default function Error() {
  return (
    <div className='w-full min-h-screen bg-[#DCE9F9] flex justify-center items-center'>
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-8xl font-semibold'>
                404
            </h2>
            <h3 className='text-4xl'>
                Page not found
            </h3>
        </div>
    </div>
  )
}
