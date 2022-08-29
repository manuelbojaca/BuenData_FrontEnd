import { createSlice } from '@reduxjs/toolkit';

export interface User {
  name: string;
  birthday: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
