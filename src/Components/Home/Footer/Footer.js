import React from 'react';
import './footerStyle.css'
import {FiInstagram,FiFacebook,FiTwitter,FiPhone,FiMessageSquare} from 'react-icons/fi'
import {FaLocationArrow} from 'react-icons/fa'

const Footer = ()=>{
    return (
        <div className="container-fluid footer-container">
            <div className="row mb-2 mt-5">
                <div className="col-12 col-md-4">
                    <h4 className="heading">About us</h4>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid vitae aliquam quisquam. Doloremque voluptatibus perspiciatis amet sequi quasi repellat.</p>
                    <a href="https://twitter.com/AshishNaikwadi7" target="_blank" className="fi-twiter" rel="noreferrer"><FiTwitter /></a>
                    <a href="https://www.instagram.com/ashish17_naikwadi/" target="_blank" className="fi-instagram" rel="noreferrer"><FiInstagram /></a>
                    <a href="https://www.facebook.com/ashish.naikwadi.904"target="_blank" className="fi-facebook" rel="noreferrer"><FiFacebook /></a>
                </div>

                <div className="col-12 col-md-4 box">
                    <h4 className="heading-2">Quick Links</h4>
                    <ul className="item">
                        <li>About</li>
                        <li>FQA</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>Terms and Condition</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 box">
                    <h4 className="heading">Contact Us</h4>
                    <address className="add">
                        <FaLocationArrow className="location"/> 647 Linda Street, <br />
                        Ashoknagar Colony ,<br />Nashik <br />
                        <FiPhone className="phone"/> 02424221244 / 7767896124<br/>
                        <FiMessageSquare className="message" />ashish.naikwadi17@gmail.com
                    </address>
                </div>
            </div>
        </div>
    )
}

export default Footer;