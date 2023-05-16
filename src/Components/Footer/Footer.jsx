
import fb from './facebook.png'
import ins from './instagram.png'
import tw from './twitter.png'

import "./Footer.css"

const Footer = () => {
    return <footer className='footer'>
        <div className='redes'>
            <a href='https://github.com/Albertwo512'>
                <img src={fb} alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/alberto-alva-0b0215187/'>
                <img src={tw} alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/alberto-alva-0b0215187/'>
                <img src={ins} alt='instagram' />
            </a>
        </div>
        
        <strong>Desarrollado por Alberto Alva</strong>
    </footer>
}

export default Footer

