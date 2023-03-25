import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import './blog.css'
import img4 from '../../Assets/image5.jpg'
import img5 from '../../Assets/image6.jpg'
import img6 from '../../Assets/image7.jpg'

const Posts=[
    {
        id:1,
        postImage:img5,
        title:'Beautiful Morocco ,let us travel!',
        desc:'The Kingdom of Morocco is a Muslim country in western North Africa,with coaselines on the Atlantic Ocean and mediterranean Sea.'
    },
    {
        id:2,
        postImage:img6,
        title:'Beautiful Morocco ,let us travel!111',
        desc:'111The Kingdom of Morocco is a Muslim country in western North Africa,with coaselines on the Atlantic Ocean and mediterranean Sea.'
    },
    {
        id:6,
        postImage:img4,
        title:'Beautiful Morocco ,let us travel!222',
        desc:'222The Kingdom of Morocco is a Muslim country in western North Africa,with coaselines on the Atlantic Ocean and mediterranean Sea.'
    },
]

function Blog() {
    return ( 
        <section className="blog container section">
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle">
                        Our Best Blog?
                    </h2>
                    <p>
                        An insight to the incredible experince in the world
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({id,postImage,title,desc})=>{
                            return (
                                <div className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} />
                                    </div>

                                    <div className="postDetails">
                                        <h3>
                                            {title}
                                        </h3>
                                        <p>
                                            {desc}
                                        </p>
                                    </div>


                                    <a href="#" className="flex">
                                        Read More
                                        <BsArrowRightShort className="icon"/>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}

export default Blog;