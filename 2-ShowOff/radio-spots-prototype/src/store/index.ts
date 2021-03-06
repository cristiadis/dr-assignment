import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeSpotsReducer from '../state/themeSpots';

export const store = configureStore({
  reducer: {
    themeSpots: themeSpotsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
