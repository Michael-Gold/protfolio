import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserinfo, updateUserInfo } from '../slices/UserSlice';
import Banner from "./homePageCompontes/Banner";
import '../css/userInfo.css';
export default function User (){
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);
    const [saveIndex, setSaveIndex] = useState();
    const [editUser, setEditUser] = useState(false); 
    const [selectedUser, setSelectedUser] = useState({        
        userName: '',
        userEmail: '',
        userRole: '',
        userMobile: '',
        userInfo: '',
    });
    const userInfo = useSelector((state) => (
        state.userInfo
    ));
    const handleDeleteUserCard = (string) => {        
       if(string === 'confirm'){
        dispatch(deleteUserinfo(saveIndex));
        handleClose();
       }else{
        return false;
       }
    }
    const handleClose = () => {
        setConfirm(false);
        setEditUser(false);
    }
    const handleDeleteUser = (index) => {
        setSaveIndex(index);      
        setConfirm(true)
        setSaveIndex(index);        
    }
    const handleEditUser = (user,index) => {  
        setSaveIndex(index);                
        setSelectedUser(user); 
        setEditUser(true); 
    };
    const handleEditInputValue = (e) => {
        const {name, value} = e.target;
        setSelectedUser((preValue) => ({
            ...preValue, [name]:value 
        }));
    }
    const handleUpdateUserInfo = (e) => {
        e.preventDefault();
        dispatch(updateUserInfo({index: saveIndex, updatedUser:selectedUser}));
        setEditUser(false);
    }
    const userBanner = 'userBanner';
    return(
        <>
        {confirm && 
        <div className="deletePopup">
            <div className="deletePopupLayout">
                <div className="closeBtnSec">
                    <span className="material-symbols-rounded" onClick={()=>handleClose(1,0)}>close</span>
                </div>
                <div className="deleteIconImage">                                     
                   <img src="/images/default-image.gif" alt="Michael Thangam" className="userProfile" />
                </div>
                <div className="deleteText">
                    <p>Do you want to delete?</p>
                </div>
                <div className="deleteBtnSec">
                    <button onClick={()=>handleDeleteUserCard('confirm')}>
                    <span className="material-symbols-rounded">delete</span>
                        Delete
                    </button>
                </div>
            </div>
        </div>       
        } 
        {editUser && 
        <div className="editPopup">
            <div className="editPopupLayout">
                <div className="closeBtnSec">
                    <span className="material-symbols-rounded" onClick={()=>handleClose(1,0)}>close</span>
                </div>
                <div className="editPopupTitle">
                    <p>User Info</p>
                </div>
                <div className="editPopupForm">
                    <form className="UserInfoForm" onSubmit={(e) => handleUpdateUserInfo(e)}>
                        <div className="inputController">
                            <input type="text" name="userName" placeholder="User Name" value={selectedUser.userName} onChange={(e) => handleEditInputValue(e)}/>
                        </div>
                        <div className="inputController">
                            <input type="email" name="userEmail" placeholder="User Email" value={selectedUser.userEmail} onChange={(e) => handleEditInputValue(e)}/>
                        </div>
                        <div className="inputController">
                            <input type="text" name="userRole"  placeholder="User Role" value={selectedUser.userRole} onChange={(e) => handleEditInputValue(e)} />
                        </div>
                        <div className="inputController">
                            <input type="text" name="userMobile" placeholder="User Mobile" value={selectedUser.userMobile} onChange={(e) => handleEditInputValue(e)} />
                        </div>
                        <div className="inputController">
                            <textarea name="userInfo" className="userInfo" placeholder="User Info" value={selectedUser.userInfo} onChange={(e) => handleEditInputValue(e)}>
                            </textarea>
                        </div>
                        <div className="buttonLayout">                    
                            <button>Update User Info</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
        }
        <div className="userInfoPageContainer">
            {/* Banner Section */}
            <section>
                <Banner bannerText = {userBanner}/>
            </section>
            <h1 className="userInfoMainTitle">User Detail Card</h1>
            <div className="userInfoSectionLayout">
                <div className="userInfoPageLayout">
                    {userInfo.map((user, index) => (
                        <div className="userCardLayout" key={index}>
                            <div className="userBGLayout">
                               {index !== 0 ? (
                                <div className="editDeleteIcon">
                                    <span className="material-symbols-rounded" onClick ={() => handleEditUser(user, index)}>edit</span>
                                    <span className="material-symbols-rounded" onClick={() => handleDeleteUser(index)}>delete</span>
                                </div>
                                ) : null }
                                <div className="userInfoImageLayout">                         
                                {index !== 0 ? (
                                    <img src="/images/user-info.gif" alt={user.userName} className="userProfile" />
                                ) :  <img src="/images/default-image.jpg" alt={user.userName} className="userProfile" />}
                                </div>
                            </div>
                            <div className="contentLayout">
                                <div className="userName">
                                    <h2>{user.userName}</h2>
                                </div>
                                <div className="userRole">
                                    <h3>{user.userRole}</h3>
                                </div>                    
                                <div className="userInfoDetail">
                                    <p>{user.userInfo}</p>
                                </div>
                                <div className="footerSection">
                                    <span className="phoneIcon">
                                        <span className="material-symbols-rounded">
                                        call
                                        </span>
                                        {user.userMobile}
                                    </span>
                                    <span className="mailIcon">
                                        <span className="material-symbols-rounded">
                                        mail
                                        </span>
                                        {user.userEmail}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}