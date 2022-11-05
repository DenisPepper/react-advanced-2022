import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter/model/slice/counter-slice';
import { StateSchema } from './state-schema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});

/*
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
*/
