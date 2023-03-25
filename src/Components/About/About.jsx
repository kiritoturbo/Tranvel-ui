import React from "react";
import './about.css'
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image3.jpg'
import img3 from '../../Assets/image4.jpg'
import video from '../../Assets/footer.mp4'
function About() {
    return ( 
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Why Hikings?
                </h2>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img1} alt="Image" />

                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health 
                        </p>
                    </div>


                    <div className="singleItem">
                        <img src={img2} alt="Image" />

                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health 
                        </p>
                    </div>



                    <div className="singleItem">
                        <img src={img3} alt="Image" />

                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health 
                        </p>
                    </div>
                </div>


                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div className="cardText">
                            <h2>Wonderful House experience min there!</h2>
                            <p>
                                The Adventure subranking is based on an wqualy weightes average of scores from five country
                            </p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted typeof="video/mp4"></video>
                        </div>

                    </div>
                </div>
            </div>
        </section>
     );
}

export default About;