import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/usersSlice';
import filtersReducer from './slice/filtersSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        filters: filtersReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
