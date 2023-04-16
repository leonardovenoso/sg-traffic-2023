import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const weatherThunk = createAsyncThunk(
  '/weather',
  async({ dateTime }) => {
    const res = await fetch(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${dateTime}`)
      .then(res => res.json())
    return res;
  }
);

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState: {
    weather: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: () => {
    builder
    .addCase(weatherThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(weatherThunk.fulfilled, (state, action) => {
      state.weather = action.payload.items;
      state.isLoading = false;
    })
    .addCase(weatherThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default weatherSlice.reducer;

