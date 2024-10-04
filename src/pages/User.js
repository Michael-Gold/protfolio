import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserinfo } from '../slices/UserSlice';
import Banner from "./homePageCompontes/Banner";
import '../css/userInfo.css';
export default function User (){
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => (
        state.userInfo
    ));
    const handleDeleteUser = (index) => {
        dispatch(deleteUserinfo(index));
    }
    const userBanner = true;
    return(
        <div className="userInfoPageContainer">
            {/* Banner Section */}
            <section>
                <Banner userBanner = {userBanner}/>
            </section>
            <h1>User Page</h1>
            <div className="userInfoPageLayout">
                <div className="userCardLayout">
                    <div className="userBGLayout">
                        <div className="userInfoImageLayout">                        
                            <img src="/images/profile.png" alt="Michael Thangam" className="userProfile" />
                        </div>
                    </div>
                    <div className="contentLayout">
                        <div className="userName">
                            <h2>Michael Thangam</h2>
                        </div>
                        <div className="userRole">
                            <h3>UI Developer</h3>
                        </div>                    
                        <div className="userInfoDetail">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="footerSection">
                            <span className="phoneIcon">
                                <span class="material-symbols-rounded">
                                call
                                </span>
                                8220663018
                            </span>
                            <span className="mailIcon">
                                <span class="material-symbols-rounded">
                                mail
                                </span>
                                michael@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userCardLayout">
                    <div className="userBGLayout">
                        <div className="userInfoImageLayout">                        
                            <img src="/images/profile.png" alt="Michael Thangam" className="userProfile" />
                        </div>
                    </div>
                    <div className="contentLayout">
                        <div className="userName">
                            <h2>Michael Thangam</h2>
                        </div>
                        <div className="userRole">
                            <h3>UI Developer</h3>
                        </div>                    
                        <div className="userInfoDetail">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="footerSection">
                            <span className="phoneIcon">
                                <span class="material-symbols-rounded">
                                call
                                </span>
                                8220663018
                            </span>
                            <span className="mailIcon">
                                <span class="material-symbols-rounded">
                                mail
                                </span>
                                michael@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userCardLayout">
                    <div className="userBGLayout">
                        <div className="userInfoImageLayout">                        
                            <img src="/images/profile.png" alt="Michael Thangam" className="userProfile" />
                        </div>
                    </div>
                    <div className="contentLayout">
                        <div className="userName">
                            <h2>Michael Thangam</h2>
                        </div>
                        <div className="userRole">
                            <h3>UI Developer</h3>
                        </div>                    
                        <div className="userInfoDetail">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="footerSection">
                            <span className="phoneIcon">
                                <span class="material-symbols-rounded">
                                call
                                </span>
                                8220663018
                            </span>
                            <span className="mailIcon">
                                <span class="material-symbols-rounded">
                                mail
                                </span>
                                michael@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}