import React, { useState } from "react";
import { addUserInfo } from "../slices/UserSlice";
import { useDispatch } from "react-redux";
import '../css/home.css';
import Banner from "./homePageCompontes/Banner";
export default function Home (){
    const dispatch = useDispatch();
   const [userInput, setUserInput] = useState({
        userName: '',
        userEmail: '',
        userAge: '',
        userMobile: '',
    });
    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setUserInput((preValue) => ({
            ...preValue, [name]:value 
        }));
    }
    function handleUserInfo(e){
        e.preventDefault();
        dispatch(addUserInfo(userInput));
        setUserInput({
            userName: '',
            userEmail: '',
            userAge: '',
            userMobile: '',            
        })
    }
    return(
        <div className="homePageLayout">
            {/* Banner Section */}
            <section>
                {/* Banner Component */}
                <Banner/>
            </section>
            <h1>Get User Details</h1>
            <div>
                <form className="UserInfoForm" onSubmit={(e) => handleUserInfo(e)}>
                    <div className="inputController">
                        <input type="text" name="userName" className="userName" placeholder="User Name" value={userInput.userName} onChange={(e) => handleInputValue(e)}/>
                    </div>
                    <div className="inputController">
                        <input type="email" name="userEmail" className="userEmail" placeholder="User Email" value={userInput.userEmail} onChange={(e) => handleInputValue(e)}/>
                    </div>
                    <div className="inputController">
                        <input type="number" name="userAge" className="userAge" placeholder="User Age" value={userInput.userAge} onChange={(e) => handleInputValue(e)} />
                    </div>
                    <div className="inputController">
                        <input type="number" name="userMobile" className="userMobile" placeholder="User Mobile" value={userInput.userMobile} onChange={(e) => handleInputValue(e)} />
                    </div>
                    <button>Add User Info</button>
                </form>
            </div>
        </div>
    )
}