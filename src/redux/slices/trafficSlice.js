import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const trafficThunk = createAsyncThunk(
  '/traffic',
  async({ dateTime }) => {
    const res = await fetch(`https://api.data.gov.sg/v1/transport/traffic-images?date_time=${dateTime}`)
      .then(res => res.json());
    return res;
  }
);

export const trafficSliceSlice = createSlice({
  name: 'traffic',
  initialState: {
    locations: [],
    isLocationLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(trafficThunk.pending, (state) => {
      state.isLocationLoading = true;
    })
    .addCase(trafficThunk.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.isLocationLoading = false;
    })
    .addCase(trafficThunk.rejected, (state) => {
      state.isLocationLoading = false;
    });
  },
});

export default trafficSliceSlice.reducer;

