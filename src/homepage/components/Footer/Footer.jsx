import './footer.scss';
import buttonIcon from '../../../assets/button__icon.svg';
import logo from '../../../assets/logo.svg';
import { useState } from 'react';



export default function Footer() {
    const [footerOptions, setfooterOptions] = useState(false);

    const handleMouseEnter = () => {
        setfooterOptions(true);
    };

    const handleMouseLeave = () => {
        setfooterOptions(false);
    };

    const footerArray = [
        {
            title: 'Platform',
            body: ['Find Work', 'Find Talent', 'Categories', 'About Us']
        }, {
            title: 'Categories',
            body: ['Data Science', 'IT & Networking', 'Web & Mobile']
        }, {
            title: 'Help',
            body: ['FAQs', 'Contact Us',]
        }, {
            title: 'Get in touch@',
            body: ['Instagram', 'Instagram', 'Twitter']
        },
    ]
    return (
        <div className='footer--container'>
            <div className='footer--container--main'>
                <div className='footer--container--main1'>
                    <p>Need a job done, and done well? Get started</p>
                    <div style={{ width: '73px', height: '73px', borderRadius: '30px', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={buttonIcon} alt='' style={{ rotate: '90deg' }} />
                    </div>
                </div>
                <div className='footer--container--main2'>
                    <div className='footer--container--main22'>
                        <img src={logo} alt='' />
                        <p>We take complex hiring processes - and simplify them.
                            Connecting you to the world&apos;s highly qualified talent pool.
                        </p>
                        <p>LINKS AND REDIRECTS</p>
                        <div>
                            <button>Hire now</button>
                            <button>Apply now</button>
                        </div>
                    </div>

                    <div className='footer--container--main23'>
                        <p className='footer--container--main23--texta'>Connecting the right people to the right businesses.</p>
                        <div className='footer--container--main23--div'>
                            {
                                footerArray.map((footer) => (
                                    <div>
                                        <p>{footer.title}</p>
                                        {
                                            footer.body.map((foot) => (
                                                <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='tapered-border'>{foot}</a>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot--footer tapered-border2 '>
                <p>All rights reserved by Zwilt</p>
                <div>
                    <a>Privacy Policy</a>
                    <a>Terms and Conditions</a>
                </div>
            </div>
        </div>
    )
}