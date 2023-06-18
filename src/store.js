import {configureStore} from '@reduxjs/toolkit';
import usersDataSlice from './store/usersDataSlice';

const store = configureStore({
    reducer: {
        userInfo: usersDataSlice,
    }
})

export default store;