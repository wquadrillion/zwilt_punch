import './prevideos.scss';
import grooveperson from '../../../assets/prevideo--pic.png';
import rightArrow from '../../../assets/right--prevideos.png';
import leftArrow from '../../../assets/left--prevideos.png';
import groovepic from '../../../assets/groovehq.svg';
import groovepic2 from '../../../assets/groove--prevideos.png';
import { useState } from 'react';


export default function Prevideos() {
    const [backgroundImage, setBackgroundImage] = useState(false);

    const handleMouseEnter = () => {
        setBackgroundImage(true);
    };

    const handleMouseLeave = () => {
        setBackgroundImage(false);
    };

    const divStyle = {
        backgroundImage: backgroundImage ? `url(${grooveperson})` : `url(${groovepic2})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '99px',
        height: '99px',
        borderRadius: '45%',
        transition: 'opacity 0.5s ease-in-out',
        // opacity: backgroundImage ? 1 : 0,
        opacity: 0,
    }

    return (
        <div className='prevideos--container'>
            <div className='prevideos--container1'>
                <div className='prevideos--container11'>
                    How it worked for Jason&nbsp;
                    <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={grooveperson} width={57} height={57} style={{ borderRadius: '50%', cursor: 'pointer' }} />&nbsp;
                    at&nbsp;&nbsp;<img src={groovepic} style={{ marginTop: '20px' }} />
                </div>
                <p className='prevideos--container1--texta'>
                    Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
                </p>
                <div className='prevideos--container12' style={{ display: 'flex', gap: '16px' }}>
                    <img style={{ cursor: 'pointer' }} src={leftArrow} alt='left icon' />
                    <img style={{ cursor: 'pointer' }} src={rightArrow} alt='right icon' />
                </div>
            </div>
            <div className='prevideos--container2'>
                <div className='prevideos--container21'>
                    <div className={`prevideos--container211 ${backgroundImage? 'fade-out-in' : 'fade-in-out'}`} style={divStyle}></div>
                    <div className='prevideos--container212--div'>
                        <p>Jason Makki</p>
                        <p>Engineer at <span className={`${backgroundImage? 'fade-out-in' : 'fade-in-out'}`}>{backgroundImage? 'FOGHORN LLC' : 'GROOVE'}</span></p>
                        <p className={`${backgroundImage? 'fade-out-in' : 'fade-in-out'}`}>{backgroundImage? "California" : "San Francisco"}</p>
                    </div>
                </div>
                <p className='prevideos--container2--texta'>Zwilt enabled us to deliver on time and they&apos;ve been heavy hitters in our corner since.
                    Zwilt enabled us to deliver on time and they&apos;ve been heavy hitters in our corner since.
                    Zwilt enabled us to deliver on time and they&apos;ve been heavy hitters.
                </p>
            </div>
        </div>
    )
}