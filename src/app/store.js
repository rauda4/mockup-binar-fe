import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../feature/auth/authSlice';
import todoSlice from '../feature/todo/todoSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
  },
});
