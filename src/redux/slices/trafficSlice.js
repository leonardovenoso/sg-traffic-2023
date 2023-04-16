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
  name: 'trafficSlice',
  initialState: {
    locations: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(trafficThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(trafficThunk.fulfilled, (state, action) => {
      state.locations = action.payload.items;
      state.isLoading = false;
    })
    .addCase(trafficThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default trafficSliceSlice.reducer;

