import React from "react";
import './footer.css'
import {GiJetFighter} from 'react-icons/gi'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
    return ( 
        <div className="footer">
            <div className="secContainer container grid">

                <div className="logoDiv">
                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className="flex">
                                <GiJetFighter className='icon'/>
                            </h1>
                            Tranvel
                        </a>
                    </div>

                    <div className="socials flex">
                        <AiFillFacebook className='icon'/>
                        <AiFillInstagram className='icon'/>
                        <AiFillTwitterSquare className='icon'/>
                    </div>
                </div>
                

                <div className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Blog</a></li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Helpul Links
                    </span>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Travel & Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                </div>
                
                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">0977 144 272</span>
                    <span className="email">manhtruong2001@gmail.com</span>
                </div>

                



            </div>
        </div>
     );
}

export default Footer;