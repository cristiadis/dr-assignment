import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Theme } from './types';

export interface State {
  data: Array<Theme>;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null
};

const fetchThemeSpots = createAsyncThunk(
  'themeSpots/fetch',
  async (_, { rejectWithValue }) => {
    const config = { headers: { "x-dr-mu-subscriber-id": "jsules/7sdk53(sr#sknms)!dgflllLKmdn4" } };

    try {
      const response = await axios.get('https://www.dr.dk/mu-online-radio/api/1.0/spots/themes', config);

      return response.data;
    } catch (err) {
      return rejectWithValue('Could not fetch theme spots.');
    }
  }
);

const themeSpotsSlice = createSlice({
  name: 'themeSpots',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchThemeSpots.pending.type]: state => {
      state.loading = true;
    },
    [fetchThemeSpots.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchThemeSpots.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export { themeSpotsSlice, fetchThemeSpots };
export default themeSpotsSlice.reducer;
