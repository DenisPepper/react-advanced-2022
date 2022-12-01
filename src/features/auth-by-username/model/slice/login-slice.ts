import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login-schema';
import { LoginByUsername } from '../services/login-by-username/login-by-username';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload; // eslint-disable-line no-param-reassign
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload; // eslint-disable-line no-param-reassign
        },
    },
    extraReducers(builder) {
        builder

            .addCase(LoginByUsername.pending, (state, action) => {
                state.error = ''; // eslint-disable-line no-param-reassign
                state.isLoading = true; // eslint-disable-line no-param-reassign
            })

            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false; // eslint-disable-line no-param-reassign
            })

            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false; // eslint-disable-line no-param-reassign
                state.error = action.payload; // eslint-disable-line no-param-reassign
            });
    },
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
