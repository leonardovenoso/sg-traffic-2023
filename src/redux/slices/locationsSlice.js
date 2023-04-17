import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const locationsThunk = createAsyncThunk(
  '/locations',
  async({ dateTime }) => {
    const res = await fetch(`http://localhost:3001/v1/locations?datetime=${dateTime}`)
      .then(res => res.json());
    return res;
  }
);

export const trafficSliceSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: {},
    isLocationLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(locationsThunk.pending, (state) => {
      state.locations = {};
      state.isLocationLoading = true;
    })
    .addCase(locationsThunk.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.isLocationLoading = false;
    })
    .addCase(locationsThunk.rejected, (state) => {
      state.locations = {};
      state.isLocationLoading = false;
    });
  },
});

export default trafficSliceSlice.reducer;

