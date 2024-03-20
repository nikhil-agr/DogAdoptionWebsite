import React, { useEffect, useRef } from 'react'
import Marquee from '../Marquee'
import LocomotiveScroll from 'locomotive-scroll'

const Page2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const loco = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });
    }
  }, []);

  return (
    <div ref={scrollRef} className='h-screen bg-red-600 rounded-t-3xl py-20'>
      <Marquee> Do not Shop But Adopt </Marquee>
    </div>
  )
}

export default Page2
