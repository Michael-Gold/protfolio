import React, { useState } from "react";
import { addUserInfo } from "../../slices/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
export default function UserInfo(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
   const [userInput, setUserInput] = useState({
        userName: '',
        userEmail: '',
        userRole: '',
        userMobile: '',
        userInfo: '',
        userProfile: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setUserInput((preValue) => ({
            ...preValue, [name]:value 
        }));
    }
    // Validate form
    const validate = () => {
        let errors = {};
        let valid = true;
        // Name validation
        if (!userInput.userName.trim()) {
            errors.userName = "Name is required";
            valid = false;
        }
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!userInput.userEmail) {
            errors.userEmail = "Email is required";
            valid = false;
        } else if (!emailPattern.test(userInput.userEmail)) {  
            errors.userEmail = "Invalid email format";
            valid = false;
        }
        // Age validation
        if (!userInput.userRole.trim()) {
            errors.userAge = "Role is required";
            valid = false;
        } 
        // Mobile validation
        const mobilePattern = /^[0-9]{10}$/;  
        if (!userInput.userMobile.trim()) {
            errors.userMobile = "Mobile number is required";
            valid = false;
        } else if (!mobilePattern.test(userInput.userMobile)) {
            errors.userMobile = "Please enter a valid 10-digit mobile number";
            valid = false;
        }
        setFormErrors(errors);
        return valid;
    };

    function handleUserInfo(e){
        e.preventDefault();
        if (validate()) {
            dispatch(addUserInfo(userInput));
            setUserInput({
                userName: '',
                userEmail: '',
                userRole: '',
                userMobile: '',     
                userInfo: '',    
                userProfile: '', 
            })
            navigate('/user')
        }
    }
    return(
        <div className="userInfoLayout"> 
            <div className="userInfoTitle">
               <h2>Get Your User Info Design</h2>
            </div>
            <form className="UserInfoForm" onSubmit={(e) => handleUserInfo(e)}>
                <div className="inputController">
                    <input type="text" name="userName" className={formErrors.userName ? 'userName errorMeg' : 'userName'} placeholder="User Name" value={userInput.userName} onChange={(e) => handleInputValue(e)}/>
                </div>
                {formErrors.userName && <p style={{color: 'red',marginTop: 0}}>{formErrors.userName}</p>}
                <div className="inputController">
                    <input type="email" name="userEmail" className={formErrors.userEmail ? 'userEmail errorMeg' : 'userEmail'} placeholder="User Email" value={userInput.userEmail} onChange={(e) => handleInputValue(e)}/>
                </div>
                {formErrors.userEmail && <p style={{color: 'red',marginTop: 0}}>{formErrors.userEmail}</p>}
                <div className="inputController">
                    <input type="text" name="userRole" className={formErrors.userRole ? 'userRole errorMeg' : 'userRole'} placeholder="User Role" value={userInput.userRole} onChange={(e) => handleInputValue(e)} />
                </div>
                {formErrors.userAge && <p style={{color: 'red',marginTop: 0}}>{formErrors.userAge}</p>}
                <div className="inputController">
                    <input type="text" name="userMobile" className={formErrors.userMobile ? 'userMobile errorMeg' : 'userMobile'} placeholder="User Mobile" value={userInput.userMobile} onChange={(e) => handleInputValue(e)} />
                </div>
                {formErrors.userMobile && <p style={{color: 'red',marginTop: 0}}>{formErrors.userMobile}</p>}
                <div className="inputController">
                    <input type="file" name="userProfile" className='' placeholder="User Profile" value={userInput.userMobile} onChange={(e) => handleInputValue(e)} />
                </div>
                <div className="inputController">
                    <textarea name="userInfo" className="userInfo" placeholder="User Info" value={userInput.userInfo} onChange={(e) => handleInputValue(e)}>

                    </textarea>
                </div>
                <div className="buttonLayout">                    
                    <button>Add User Info</button>
                </div>
            </form>
        </div>
    )
}