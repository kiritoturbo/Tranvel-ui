import React from "react";
import './offers.css'

import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import {BiWifi} from 'react-icons/bi'
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Assets/image10.jpg'
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image3.jpg'
import img3 from '../../Assets/image4.jpg'
import img4 from '../../Assets/image5.jpg'
import img5 from '../../Assets/image6.jpg'
import img6 from '../../Assets/image7.jpg'


function Offers(){
    const Offers =[
        {
            id:1,
            imgSrc:img1,
            destTitle:'Machu Picchu1',
            location:'Peru',
            price:'$7,452'
        },
        {
            id:2,
            imgSrc:img2,
            destTitle:'Machu Picchu2',
            location:'Peru',
            price:'$7,452'
        },
        {
            id:3,
            imgSrc:img3,
            destTitle:'Machu Picchu3',
            location:'Peru',
            price:'$7,452'
        },
        {
            id:4,
            imgSrc:img4,
            destTitle:'Machu Picchu4',
            location:'Peru',
            price:'$7,452'
        },
        {
            id:5,
            imgSrc:img5,
            destTitle:'Machu Picchu5',
            location:'Peru',
            price:'$7,452'
        },
        {
            id:6,
            imgSrc:img6,
            destTitle:'Machu Picchu6',
            location:'Peru',
            price:'$7,452'
        },
    ];
    
    return ( 
        <section className="offer container section">
            <div className="secContainer">


                <div className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural cities
                    </p>
                </div>


                <div className="mainContent grid">

                   {
                    Offers.map(({ id,imgSrc,destTitle,location,price})=>{
                    return(
                        <div className="singleOffer">
                            <div className="destImage">
                                <img src={imgSrc} alt={destTitle} />

                                <span className="discount">
                                    30% Off
                                </span>
                            </div>

                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>
                                        {price}
                                    </h4>
                                    <span className="status">
                                        For Rent
                                    </span>
                                </div>


                                <div className="amenities flex">
                                    <div className="singleAmenity flex">
                                        <MdKingBed className='icon'/>
                                        <small>2 Beds</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdBathtub className='icon'/>
                                        <small>1 Bath</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <BiWifi className='icon'/>
                                        <small>Wifi</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdAirportShuttle className='icon'/>
                                        <small>Shuttle</small>
                                    </div>
                                </div>


                                <div className="location flex">
                                    <MdLocationOn className="icon" />
                                    <small>450 Vine #310,{location}</small>
                                </div>

                                <button className="btn flex">
                                    View Details
                                    <BsArrowRightShort className="icon" />
                                </button>
                            </div>
                        </div>
                    )})
                   }

                </div>
            </div>
        </section>
     );
}

export default Offers;