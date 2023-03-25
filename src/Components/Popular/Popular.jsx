import React,{useEffect} from "react";
import './popular.css'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {BsArrowRightShort,BsDot} from 'react-icons/bs'

import img from '../../Assets/image2.jpg'
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image3.jpg'
import img3 from '../../Assets/image4.jpg'
import img4 from '../../Assets/image5.jpg'
import img5 from '../../Assets/image6.jpg'
import img6 from '../../Assets/image7.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
    {
        id:1,
        imgSrc:img1,
        destTitle:'Machu Picchu1',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Machu Picchu2',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Machu Picchu3',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Machu Picchu4',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Machu Picchu5',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Machu Picchu6',
        location:'Peru',
        grade:'CULTURAL RELAX'
    },
]
function Popular() {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return ( 
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div data-aos='fade-right' data-aos-duration='2500' className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>From historical cities to natural 
                            specteculars, come see the best of the world!
                        </p>
                    </div>

                    <div  data-aos='fade-left' data-aos-duration='2500' className="iconsDiv flex">
                        <AiOutlineArrowLeft className="icon leftIcon"/>
                        <AiOutlineArrowRight className="icon"/>
                    </div>
                </div>


                <div className="mainContent grid">
                    {
                        Data.map(({
                            id,imgSrc,destTitle,location,grade
                        })=>{
                            return(
                                <div data-aos='fade-up' className="singleDestination">
                                    <div className="destImage">

                                        <img key={id} src={imgSrc} alt="Image title" />
                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>{location}</p>
                                            <BsArrowRightShort className='icon'/>
                                        </div>

                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>

                                        <div className="destText flex">
                                            <h6>
                                                {location}
                                            </h6>

                                            <span className="flex">
                                                <span className="dot">
                                                    <BsDot className='icon'/>
                                                </span>
                                                Dot
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}

export default Popular;