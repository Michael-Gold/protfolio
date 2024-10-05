import React from "react";
import Banner from "./homePageCompontes/Banner";
import '../css/about.css';

export default function About (){
    const aboutBanner = 'aboutBanner';
    return(
        <div className="aboutPage">
            <div className="aboutBannerLayout">
                <Banner bannerText={aboutBanner}/>
            </div>
            <div className="aboutContentLayout">
                <div className="aboutImageLayout">
                    <img src="/images/about-me.jpeg" alt="Michael Thangam" className="aboutImage" />
                </div>
                <div className="aboutContent">
                    <h1>Michael Thangam</h1>
                    <div className="contnetLayout">
                        <p>
                            User Interface (UI) Developer with 7+ years of experience, specializing in Agile methodology, project management, application development,
                            and UX design. A strong history of building and leading diverse
                            technical teams to create scalable code and web solutions. Adept at
                            managing stakeholder expectations throughout all phases of the project
                            lifecycle.
                        </p>
                    </div>
                </div>
            </div>
            <div className="aboutContentLayout">
                <div className="aboutContent">
                    <h2>Skills I will play</h2>
                    <p>I will use any skills you give me.</p>
                    <div className="contnetLayout">
                        <ul>
                            <li>React JS</li>
                            <li>Redux</li>
                            <li>Svelte JS</li>
                            <li>Team Management</li>
                            <li>GA 4 (Google Analytics 4)</li>
                            <li>GTM (Google Tag Manager)</li>
                            <li>SEO (Search Engine Optimization)</li>
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>Wordpress</li>
                            <li>Photoshop</li>
                            <li>Figma</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="aboutImageLayout">
                    <img src="/images/about-skill.jpeg" alt="Michael Thangam" className="aboutImage" />
                </div>
            </div>
        </div>
    )
}