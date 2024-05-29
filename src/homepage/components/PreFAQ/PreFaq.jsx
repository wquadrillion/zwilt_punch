import ButtonMini from '../ButtonMini/ButtonMini';
import './prefaq.scss';
import Img from '../../../assets/prefaq--img.png'


export default function PreFAQ() {
    const array = ['We pick the best for you to select.', 'Thousands of vetted candidates in dozens of categories.', 'Risk-free resource swapping for the best fit']
    return (
        <div className='preFaq--container'>
            <div className='preFaq--container1'>
                <p className='preFaq--container1--texta'>Why choose Zwilt?</p>
                <p className='preFaq--container1--textb'>
                    We take complex hiring processes - and simplify them.
                    Connecting you to the world&apos;s highly qualified talent pool.
                </p>
            </div>
            <div className='preFaq--container2'>
                <div className='preFaq--container21'>
                    <p className='preFaq--container21--texta'>Onboard without the risk.</p>
                    <div style={{marginBottom: '37px'}}>
                        {
                            array.map((arr, index) => (
                                <div className='preFaq--container21--div' key={index}>
                                    <p></p>
                                    <p>{arr}</p>
                                </div>
                            ))
                        }
                    </div>
                    <ButtonMini text={'Learn More'} />
                </div>
                <div className='preFaq--container22'>
                    <img src={Img} alt='alt image' />
                </div>
            </div>
        </div>
    )
}