import React, { useState } from 'react';
import ScrollUp from '../assets/scrollUp.png';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled>300);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            <img className={visible?'cursor-pointer inline fixed right-8 bottom-8':'hidden'} src={ScrollUp} alt="" onClick={scrollToTop} />
        </div>
    )
}

export default BackToTop