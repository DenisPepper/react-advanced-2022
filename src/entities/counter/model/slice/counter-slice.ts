import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counter-schema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // eslint-disable-line no-param-reassign
        },
        decrement: (state) => {
            state.value -= 1; // eslint-disable-line no-param-reassign
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
