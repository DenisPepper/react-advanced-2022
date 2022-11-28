import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/user/model/types/user-schema';

const initialState: UserSchema = {
    authData: undefined,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
