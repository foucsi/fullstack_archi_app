import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    value: string | null;
}

const initialState: UserState = {
    value: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
