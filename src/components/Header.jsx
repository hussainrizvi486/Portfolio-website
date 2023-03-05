import React from 'react';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <nav>
                <h2>Hussain.</h2>
                <div className='nav-items'>
                    <a href='#1' onClick={scrollToTop}>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#contact'>Contact</a>
                </div>

                <a href="mailto:hussainrizvi486@gmail.com" className='email-btn'>Email</a>




                <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <BiMenuAltRight />
                </div>

                <div className={`mobile-nav ${menuOpen ? "open-mobile-nav" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <h2>Hussain.</h2>

                    <div>
                        <a href='#1' onClick={scrollToTop}>Home</a>
                        <a href='#about' onClick={() => setMenuOpen(false)} >About</a>
                        <a href='#skills' onClick={() => setMenuOpen(false)} >Skills</a>
                        <a href='#contact' onClick={() => setMenuOpen(false)} >Contact</a>
                    </div>
                    <a href="mailto:hussainrizvi486@gmail.com" ><button>Email</button></a>

                </div>

            </nav >

        </>
    )
}

export default Header