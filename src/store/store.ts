import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { userApi } from '@src/store/services/userApi';
import { createWrapper } from 'next-redux-wrapper';

const store = () =>
  configureStore({
    reducer: {
      //[userSlice.name]: userSlice.reducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(store);
