import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
    userName: 'Michael Thangam',
    userEmail: 'michael@gmail.com',
    userRole: 'UI Developer',
    userMobile: '8220663019',
    userInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}];
const UserSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        addUserInfo(state,action){
            state.push(action.payload);
        },
        deleteUserinfo(state,action){  
            const deleteUser = state.filter((val,index) => index !== action.payload);
            return deleteUser;
        },
        updateUserInfo(state, action){
            const { index, updatedUser } = action.payload;
            state[index] = { ...state[index], ...updatedUser };
        }
    },
})

export const { addUserInfo, deleteUserinfo, updateUserInfo } = UserSlice.actions;
export default UserSlice.reducer;