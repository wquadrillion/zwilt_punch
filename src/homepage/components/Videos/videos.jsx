import './videos.scss';
import { PiVideoFill } from "react-icons/pi";
import { useState } from 'react';
import ButtonMini from '../ButtonMini/ButtonMini';
import vid1Num from '../../../assets/video__1__img.svg';
import vid1Img from '../../../assets/video__1.png';
import vid2Num from '../../../assets/video__2__img.svg';
import vid2Img from '../../../assets/video__2.png';
import vid3Num from '../../../assets/video__3__img.svg';
import vid3Img from '../../../assets/video__3.png';


export default function Videos() {
    const [step, setStep] = useState('Step 1:');

    const VideosSec = [
        {
            background: '#EDEFFF',
            videoNum: vid1Num,
            videoImg: vid1Img,
            title: 'Find your next star performer',
            body: 'Explore the vast Zwilt marketplace to find the candidate that meets your needs.',
            buttonTitle: 'Join Now',
        }, {
            background: '#FFF7E1',
            videoNum: vid2Num,
            videoImg: vid2Img,
            title: 'Evaluate to your heart’s content.',
            body: 'Assess the candidate through work history, transparent tests and video interviews.',
            buttonTitle: 'Browse More',
        }, {
            background: '#F3F3F3',
            videoNum: vid3Num,
            videoImg: vid3Img,
            title: 'Start  building your team',
            body: 'Onboard your candidate right away and start creating the next big thing.',
            buttonTitle: 'Join Now',
        },
    ]

    const videosArray = [
        {
            step: 'Step 1:',
            title: 'Resume Screening',
            body: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
        }, {
            step: 'Step 2:',
            title: 'Video Interview',
            body: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
        }, {
            step: 'Step 3:',
            title: 'Technical Evaluation',
            body: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
        }, {
            step: 'Step 4:',
            title: ' Application Review',
            body: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
        }, {
            step: 'Step 5:',
            title: 'Lets get to work',
            body: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
        },
    ]

    const handleChange = (text) => {
        if (step == text) {
            return;
        } else {
            setStep(text);
        }
    }

    return (
        <div className='videos--container'>
            <div className='videos--container1'>
                <p className='videos--container1--texta'>How we ensure you're in good hands.</p>
                <p className='videos--container1--textb'>With our comprehensive screening process, we hand-pick highly skilled
                    candidates so you can onboard them in a matter of days.
                </p>
                <div className='videos--container11'>
                    {
                        videosArray.map((video) => (
                            <div onClick={() => handleChange(video.step)} className='videos--container111--main' style={{ boxShadow: step == video.step ? '0px 15px 30px 0px #00000012' : '', transition: "box-shadow .3s ease" }}>
                                <div className='videos--container111'>
                                    <div className='videos--container111--div' style={{ background: step == video.step ? '#8BA4FD' : '#ECECEC', transition: 'background .3s ease' }}><PiVideoFill fontSize={15} color={step == video.step ? 'white' : ''} /></div>
                                    <p className='videos--container111--texta'>{video.step}&nbsp;</p>
                                    <p className='videos--container111--textb'>{video.title}</p>
                                </div>
                                {
                                    step == video.step && <p className='videos--container111--textc'>{video.body}</p>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='videos--container2'>
                <p className='videos--container2--texta'>Start your journey today.</p>
                    {

                        VideosSec.map((videos) => (
                            <div className='videos--container21' style={{ display: 'flex', background: `${videos.background}` }}>
                                <div className='videos--container211' style={{ display: 'flex' }}>
                                    <img src={videos.videoNum} alt='video Number' height={83} />
                                    <div className='videos--container211--div'>
                                        <p className='videos--container211--div--texta'>{videos.title}</p>
                                        <p className='videos--container211--div--textb'>{videos.body}</p>
                                        <ButtonMini text={videos.buttonTitle} />
                                    </div>
                                </div>
                                <div className='videos--container212'>
                                    <img src={videos.videoImg} alt='alt picture' />
                                </div>
                            </div>
                        ))

                    }
            </div>

        </div >
    )
}