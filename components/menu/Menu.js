"use client"
import React from 'react'
import "./menu.css"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/PetInfo", label: "Pet Info" },
    { path: "/PetStores", label: "Pet Stores" },
    { path: "/Help-Donation", label: "Help/Donation" },
]

const Menu = () => {
    const container = useRef();
    const [isMenuopen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuopen);
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 })

        tl.current = gsap
            .timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    },
        { scope: container }
    );
    const [isClient, setIsClient] = useState(false);

    
    useEffect(() => {
        setIsClient(true);
        if (isMenuopen) {
            tl.current.play();
        }
        else {
            tl.current.reverse();
        }
    }, [isMenuopen]);

    return (
        <div className='menu-container' ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">Pawsnation</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">Pawsnation</Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className='menu-link'>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="#">X &#8599;</a>
                            <a href="#">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                            <a href="#">Behance &#8599;</a>
                            <a href="#">Dribbble &#8599;</a>
                        </div>
                        <div className="menu-info-col2">
                            <p>pawsnation@gmail.com</p>
                            <p>88845 45558</p>
                        </div>
                    </div>
                </div>
                {isClient && (
                <div className="menu-preview">
                    <video src="/dog.mp4" autoPlay loop muted></video>
                </div>
            )}
            </div>
        </div>
    )
}

export default Menu