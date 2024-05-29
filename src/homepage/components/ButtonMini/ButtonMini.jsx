
import buttonIcon from '../../../assets/button__icon.svg';
import './buttonMini.scss'


export default function ButtonMini({text}) {
    return (
        <div className='buttonMini--container'>
            <button>
                <img className='button--container--img' src={buttonIcon} alt='button icon'/>
            </button>
            <p className='button--container--text' >{text}</p>
        </div>
    )
}