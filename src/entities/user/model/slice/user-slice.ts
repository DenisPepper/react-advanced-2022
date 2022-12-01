import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, UserType } from 'entities/user/model/types/user-schema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
/* eslint-disable no-param-reassign */
const initialState: UserSchema = {
    authData: null,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserType>) => {
            state.authData = action.payload;
        },

        setAuthDataFromLocalStorage: (state) => {
            const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
            if (authData) {
                state.authData = authData;
            }
        },

        logOut: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = null;
        },
    },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
