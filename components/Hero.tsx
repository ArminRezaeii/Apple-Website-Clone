'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

function Hero() {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2
    })
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y:-5,
    
    })
  }, [])
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialVideoSrc = window.innerWidth < 760 ? "/assets/videos/smallHero.mp4" : "/assets/videos/hero.mp4";
      setVideoSrc(initialVideoSrc);
    }
  }, []);
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc("/assets/videos/smallHero.mp4")
    }
    else {
      setVideoSrc("/assets/videos/hero.mp4")
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet)
    }
  }, [])
  return (
    <section className='w-full nav-height z-50 bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col '>
        <p className='hero-title' id='hero'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From 199$/month or $999</p>
      </div>
    </section>
  )
}

export default Hero