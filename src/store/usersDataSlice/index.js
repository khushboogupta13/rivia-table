import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userInfo',
    initialState: [],
    reducers: {
        setUserInfo(state, action) {
            return action.payload;
        },
        deleteUserInfo(state, action) {
            const userId = action.payload;
            return state.filter((row) => row.id !== userId);
        }
    }
})

export const { setUserInfo, deleteUserInfo } = userDataSlice.actions;
export default userDataSlice.reducer;