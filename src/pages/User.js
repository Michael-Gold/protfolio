import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserinfo } from '../slices/UserSlice';
export default function User (){
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => (
        state.userInfo
    ));
    const handleDeleteUser = (index) => {
        dispatch(deleteUserinfo(index));
    }
    return(
        <div>
            <h1>User Page</h1>
            <div>
                {userInfo.map((userInfo, index) => (
                    <div className="userDetails" key={index}>
                    <h2>{userInfo.userName}</h2>
                    <h4>{userInfo.userEmail}</h4>
                    <h4>{userInfo.userAge}</h4>
                    <h4>{userInfo.userMobile}</h4>
                    <button onClick={() => handleDeleteUser(index)}>Delete User</button>
                    </div>
                ))}
            </div>
        </div>
    )
}