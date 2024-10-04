import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
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
        }
    },
})

export const { addUserInfo, deleteUserinfo } = UserSlice.actions;
export default UserSlice.reducer;