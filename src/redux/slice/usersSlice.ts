import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../type';


// Создайте экземпляр axios с базовым URL
const axiosGetApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Определите начальное состояние
interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

// Создайте асинхронный thunk для получения данных
export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await axiosGetApi.get('/users');
        return response.data;
    }
);

// Создайте slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Неизвестная ошибка';
            });
    },
});

export default usersSlice.reducer;
