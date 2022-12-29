import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../models/UserModel';

const initialState: IUser = {username: '', password: ''};

const LoginSlice = createSlice({
  name: 'login',
  initialState: {value: initialState},
  reducers: {
    loginAction: (state, action) => {
      state.value = action.payload;
    },
    logoutAction: (state, action) => {
      state.value = initialState;
    },
  },
});

export default LoginSlice.reducer;
export const {loginAction, logoutAction} = LoginSlice.actions;
