
import './header.scss';
import React from 'react';
import logo from '../../../assets/logo.svg';
import { useMediaQuery } from 'react-responsive';
import { LuMenu } from "react-icons/lu";



export default function Header() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 930px)' });

    return (
        <div className='header--container' style={{ color: 'white' }}>
            <img src={logo} alt='Zwilt logo'/>
            {!isMediumScreen && <div className='menu--options' style={{ fontSize: '14px', display: 'flex', gap: '32px', fontWeight: 500, lineHeight: '14px' }}>
                <a href='#'>Find work</a>
                <a href='#'>Find Talent</a>
                <a href='#'>Articles</a>
                <a href='#'>Contact Us</a>
            </div>}
            {!isMediumScreen && <div className='menu--options2'>
                <a href='#'>Log In</a>
                <a style={{ marginLeft: '20px', fontSize: '14px', fontWeight: 500, padding: '14px 21px', background: 'white', color: 'black', borderRadius: '14px' }} href='#'>Join Now</a>
            </div>}
            {isMediumScreen && <LuMenu fontSize={24} style={{cursor: 'pointer'}}/>}
        </div>
    )
}