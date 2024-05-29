
import buttonIcon from '../../../assets/button__icon.svg';
import './button.scss'


export default function Button({text}) {
    return (
        <div className='button--container'>
            <button>
                <img className='button--container--img' src={buttonIcon} alt='button icon'/>
            </button>
            <p className='button--container--text' >{text}</p>
        </div>
    )
}