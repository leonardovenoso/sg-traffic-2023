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
  name: 'weather',
  initialState: {
    weatherLocations: {},
    isWeatherLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(weatherThunk.pending, (state) => {
      state.weatherLocations = {};
      state.isWeatherLoading = true;
    })
    .addCase(weatherThunk.fulfilled, (state, action) => {
      state.weatherLocations = action.payload;
      state.isWeatherLoading = false;
    })
    .addCase(weatherThunk.rejected, (state) => {
      state.weatherLocations = {};
      state.isWeatherLoading = false;
    });
  },
});

export default weatherSlice.reducer;

