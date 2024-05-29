import './brands.scss';
import skillsIcon from '../../../assets/brandsassets/skills.svg';
import categoriesIcon from '../../../assets/brandsassets/categories.svg';
import profileIcon from '../../../assets/brandsassets/profiles.svg';
import shopify from '../../../assets/brandsassets/1Inter.png';
import magneto from '../../../assets/brandsassets/2Inter.png';
import data from '../../../assets/brandsassets/3Inter.png';
import webflow from '../../../assets/brandsassets/4Inter.png';
import DotNet from '../../../assets/brandsassets/5Inter.png';
import nextIcon from '../../../assets/brandsassets/6Inter.png';
import backIcon from '../../../assets/brandsassets/1design.png';
import figma from '../../../assets/brandsassets/2design.png';
import photoshop from '../../../assets/brandsassets/3design.png';
import illustration from '../../../assets/brandsassets/4design.png';
import unrealEng from '../../../assets/brandsassets/5design.png';
import cinema from '../../../assets/brandsassets/6design.png';
import Button from '../Button/Button';
import ButtonMini from '../ButtonMini/ButtonMini';
import { useMediaQuery } from 'react-responsive';



export default function Brandspage() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

    const Brands = [{
        stackTitle: 'Find Dev and IT professionals to scale your business.',
        stackBody: [{ icon: skillsIcon, amount: '989 Skiils' }, { icon: categoriesIcon, amount: "45 Sub-Categories" }, { icon: profileIcon, amount: '1011 Profiles' }],
        stackTitle2: 'IT & Development',
        stackBody2: [{ photo: shopify, name: 'Shopify Developer' }, { photo: magneto, name: 'Magneto Developer' }, { photo: data, name: 'Data Scientist' }, { photo: webflow, name: 'Webflow Developer' }, { photo: DotNet, name: 'DotNet Developer' }, { photo: nextIcon, name: '' }]
    },
    {
        stackTitle: 'Explore Creative individuals with a keen eye for detail.',
        stackBody: [{ icon: skillsIcon, amount: '989 Skiils' }, { icon: categoriesIcon, amount: "45 Sub-Categories" }, { icon: profileIcon, amount: '1011 Profiles' }],
        stackTitle2: 'Designer & Creative',
        stackBody2: [{ photo: backIcon, name: '' }, { photo: figma, name: 'UX Developer' }, { photo: photoshop, name: 'Graphics designer' }, { photo: illustration, name: 'Illustration Artist' }, { photo: unrealEng, name: 'Unreal Engine' }, { photo: cinema, name: 'Cinema 4D' }]
    }];

    return (
        <div className='brandspage--wrapper'>
            <div className='brandspage--container'>
                <div className='brandspage--subcontainer'>
                    <p className='brandspage--subcontainer--texta'>Your one-stop marketplace for finding the talent your business needs.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {
                            Brands.map((brand, index) => (
                                <div key={index} className='brands--container'>
                                    <div className='brands--container1'>
                                        <p className='brands--container1--texta'>{brand.stackTitle}</p>
                                        <div>
                                            {
                                                brand.stackBody.map((stackbody, index) => (
                                                    <div style={{ display: 'flex', gap: '8px', }} key={index}>
                                                        <img src={stackbody.icon} alt='skillsIcon' />
                                                        <p>{stackbody.amount}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div style={{ borderRadius: '7px', background: 'white', display: 'flex', flexWrap: 'wrap', gap: '10px', flexDirection: 'column' }} className='brands--container2'>
                                        <p className='brands--container2--texta'>{brand.stackTitle2}</p>
                                        <div>
                                            {
                                                brand.stackBody2.map((stackbody2, index) => (
                                                    <div key={index}>
                                                        <div className='image--background' style={{ borderRadius: stackbody2.name ? '50%' : '30px' }}>
                                                            <div style={{ width: stackbody2.name ? '32px' : stackbody2.photo === 'DotNet Developer' ? '69px' : '25px', backgroundImage: `url(${stackbody2.photo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} className='brand__logo' />
                                                        </div>
                                                        <p>{stackbody2.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='bottom--container'>
                            {isSmallScreen ? <ButtonMini text='Explore Now' /> : <Button text='Explore Now' />}
                            <p className='bottom--container--text'><span>30 more &nbsp;</span>to explore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}