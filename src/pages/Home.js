import React from "react";
import '../css/home.css';
import Banner from "./homePageCompontes/Banner";
import RecentWork from "./homePageCompontes/RecentWork";
import UserInfo from "./homePageCompontes/UserInfo";
export default function Home (){
    return(
        <div className="homePageLayout">
            {/* Banner Section */}
            <section className="bannerSection">
                <Banner/>
            </section>
            {/* Recent Work */}
            <section className="recentWorkSection">
                <RecentWork />
            </section>
            <section className="userInfoSection">
                <UserInfo />
            </section>            
        </div>
    )
}