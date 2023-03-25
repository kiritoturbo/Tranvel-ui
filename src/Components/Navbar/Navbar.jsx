import React,{useState} from "react";
import './navbar.css'
import {GiJetFighter} from 'react-icons/gi'
import {AiFillCloseCircle,AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    ///code to toggle/show navbar
    const [active,setActive]=useState('navBar');
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }

    //code remove active navbar
    const removeNav=()=>{
        setActive('navBar')
    }

    //code ro add background color to the header
    const [transparent,setTransparent] = useState('header')
    const addBg=()=>{
        if(window.scrollY>=10){
            setTransparent('header activeNavbar')
        }
        else{
            setTransparent('header');
        }
    }
    window.addEventListener('scroll',addBg);
    return ( 
        <section className="navBarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1 className="flex">
                            <GiJetFighter className='icon'/>
                            Travel website
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Products</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Resources</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contacts</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>
                    </ul>


                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle  className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <AiOutlineMenu className='icon'/>
                </div>
            </div>
        </section>
     );
}

export default Navbar;