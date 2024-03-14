import React from 'react';
import './style.css'

const Marquee = ({ children }) => {
  return (
    <div className='overflow-hidden border-y-2 py-[-180px] whitespace-nowrap w-full'>
      <div className='inline-block text-[14vw] font-[FoundersGrotesk] leading-tighter tracking-tight uppercase space-x-32 animate-marquee-loop'>
        {/* <span>{children}</span> */}
        <span>{children}</span>
      </div>
      <div className='inline-block text-[14vw] font-[FoundersGrotesk] leading-tighter tracking-tight uppercase space-x-32 animate-marquee-loop'>
        {/* <span>{children}</span> */}
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Marquee;
