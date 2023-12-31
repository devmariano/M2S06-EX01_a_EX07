import './Footer.css';
import logo from '../../assets/logo.png';
import {
    FaFacebookSquare,
    FaInstagram,
  } from "react-icons/fa";

function Footer() {
    return (  
        <div className="Footer">
            <div className="footer-wrapper">
                <div className='logo-wrapper'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='container-wrapper'>
                    <h2>Contato</h2>
                    <div className='info-wrapper'>
                        <ul>
                            <li><a href="#">+55 21 9999-9999</a></li>
                            <li><a href="#">teste@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className='info-wrapper'>
                        <ul>
                            <li>Rua Melhor rua, 666 - Asgard</li>
                            <li>São Paulos - SP</li>
                        </ul>
                    </div>
                    <div className='social-wrapper'>
                        <a href="#" target='blank'><FaInstagram/></a>
                        <a href="#" target='blank'><FaFacebookSquare/></a>
                    </div>
                </div>
                <div className='container-wrapper'>
                    <h2>Informações</h2>
                    <ul>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className='copywright-wrapper'>
                <p>Minha Empresa © Alguns direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;