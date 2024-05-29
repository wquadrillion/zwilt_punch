

import React from 'react';
import './hero.scss';
import Header from '../header/header';
import herogif from '../../../assets/hero__gif.gif'
import inputIcon from '../../../assets/heropage__InputIcon.svg';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';



export default function Hero() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });

    // const slidesArray = [slide1, slide2, slide3, slide4, slide5, slide6];
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedStack, setSelectedStack] = useState('IT & Development');
    const [inputValue, setInputValue] = useState('');
    const [isAtFirstPosition, setIsAtFirstPosition] = useState(true);
    const elementRef = useRef(null);

    const handleToggle = () => {
        if (!isSmallScreen) {
            if (elementRef.current) {
                if (isAtFirstPosition) {
                    elementRef.current.style.transform = `translateX(220px)`;
                } else {
                    elementRef.current.style.transform = 'translateX(0)';
                }
                setIsAtFirstPosition(!isAtFirstPosition);
            }
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleStackClick = (stack) => {
        setSelectedStack(stack === selectedStack ? null : stack);
        // if (isSmallScreen) {
            // handleToggle2();
        // } else {
            handleToggle();
        // }
    };
    const stackChoice = [{
        stack: 'IT & Development', options: ['Python Developer', 'Shopify Developer', 'MERN Devloper', 'Full stack developer', 'Data Scientist', 'Front End Developer', 'Shopify Developer', 'Ruby on rails', 'Python Developer', 'Shopify Developer', 'MERN Devloper',]
    },
    {
        stack: 'Design and Creative', options: ['Brand designer', 'Motion designer', 'Graphics Designer', 'UX Designer', "UX Researcher", 'UI Designer', 'Animator', 'Brand designer', 'Motion designer', 'Graphics Designer', 'UX Designer']
    }]

    return (
        <div className='hero--container'>
            <Header />
            <div className='hero-subcontainer'>
                <div className='hero-subcontainer1'>
                    <div>
                        Finding the right fit&nbsp;<img src={herogif} width={63} height={43} alt='hero gif image' />&nbsp;has never been easier.
                    </div>
                </div>
                <p className='hero-subcontainer--texta'>With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>
                <div class="input-container">
                    <input type="text"
                        id="styled-input"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    {inputValue == '' && <div id="custom-placeholder">looking for <span>design |</span></div>}
                    <button><img style={{ cursor: 'pointer' }} src={inputIcon} alt='input icon' /></button>
                </div>
                <div className="stack-selector" style={{ fontSize: '16px' }}>
                    <div className="stack-names">
                        <div className='selector' ref={elementRef}></div>
                        {stackChoice.map((item, index) => (
                            <div
                                key={index}
                                className={`stack-name ${selectedStack === item.stack ? 'selected' : ''}`}
                                onClick={() => handleStackClick(item.stack)}
                                style={{ cursor: 'pointer', fontWeight: selectedStack === item.stack ? 600 : '', color: selectedStack === item.stack && isSmallScreen? '#FFBE2E' : 'black' }}
                            >
                                {item.stack}
                            </div>
                        ))}
                    </div>
                    <div className="stack-options">
                        {selectedStack && stackChoice.find(item => item.stack === selectedStack).options.map((option, index) => (
                            <div key={index} className="stack-option">
                                {option}
                            </div>
                        ))}
                        <p style={{ fontWeight: 600, color: 'black', display: 'flex', justifyContent: 'center' }}>Explore More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}