import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
    name: string;
    username: string;
    email: string;
    phone: string;
}

const initialState: FiltersState = {
    name: '',
    username: '',
    email: '',
    phone: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setNameFilter(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setUsernameFilter(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setEmailFilter(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPhoneFilter(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
    },
});

export const { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
