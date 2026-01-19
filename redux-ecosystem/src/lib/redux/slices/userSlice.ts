import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface UserState {
    data: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // This action will be dispatched by the UI to start the Saga
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fetchUserRequest: (state, action: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
        },
        // This action will be dispatched by the Saga on success
        fetchUserSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.data = action.payload;
        },
        // This action will be dispatched by the Saga on failure
        fetchUserFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearUser: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure, clearUser } = userSlice.actions;
export default userSlice.reducer;
