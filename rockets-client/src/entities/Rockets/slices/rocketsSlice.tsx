import { createSlice } from "@reduxjs/toolkit";

import { fetchMoreRockets } from "../api/fetchMoreRockets";
import { fetchRockets } from "../api/fetchRockets";
import { RocketsInitialState } from "../models/rockets";

const rocketsSlice = createSlice({
  name: "rockets",
  initialState: {
    page: 1,
    rockets: [],
    isLoading: false,
    isPaginationLoading: false,
    hasMore: true,
    error: null,
  } as RocketsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        state.hasMore = false;
        state.isLoading = false;
      }
      state.rockets = action.payload;
      state.page += 1;
      state.isLoading = false;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    //

    builder.addCase(fetchMoreRockets.pending, (state) => {
      state.isLoading = true;
      state.isPaginationLoading = true;
    });
    builder.addCase(fetchMoreRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
      state.page += 1;

      state.isLoading = false;
      state.isPaginationLoading = false;
      state.hasMore = true;
    });
    builder.addCase(fetchMoreRockets.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.isPaginationLoading = false;
    });
  },
});

export { rocketsSlice };
