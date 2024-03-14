'use client'
import React from 'react'
import Marquee from '../Marquee'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
const page2 = () => {
  const loco = new LocomotiveScroll();
  return (
    <div className='h-screen bg-red-600 rounded-t-3xl py-20'>
      <Marquee>&nbsp;Do not Shop But Adopt&nbsp;</Marquee>
    </div>
  )
}

export default page2