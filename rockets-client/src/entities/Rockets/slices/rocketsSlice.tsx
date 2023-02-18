import {
  RocketsInitialState,
  RocketsParams,
  RocketsResponse,
} from "../models/rockets";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import qs from "qs";
import axios from "@/shared/axios/axiosInstance";
import { AppStore } from "@/appTemp/store/store";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async (_, thunkAPI): Promise<RocketsResponse> => {
    const getState = thunkAPI.getState as AppStore["getState"];

    const params: RocketsParams = {
      page: {
        limit: 15,
        number: getState().rocketsState.page,
      },
    };

    const response = await axios.get<RocketsResponse>(`/rockets`, {
      params,
      paramsSerializer: {
        serialize: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      },
    });

    return response.data;
  }
);

export const refetchRockets = createAsyncThunk(
  "rockets/refetchRockets",
  async (_, thunkAPI): Promise<RocketsResponse> => {
    const getState = thunkAPI.getState as AppStore["getState"];

    const params: RocketsParams = {
      page: {
        limit: 15,
        number: getState().rocketsState.page,
      },
    };

    const response = await axios.get<RocketsResponse>(`/rockets`, {
      params,
      paramsSerializer: {
        serialize: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      },
    });

    return response.data;
  }
);

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
      if (action.payload.rockets.length === 0) {
        state.hasMore = false;
        state.isLoading = false;
      }
      state.rockets = state.rockets.concat(action.payload.rockets);
      state.page += 1;
      state.isLoading = false;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    //

    builder.addCase(refetchRockets.pending, (state) => {
      state.isLoading = true;
      state.isPaginationLoading = true;
    });
    builder.addCase(refetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload.rockets;
      state.page += 1;

      state.isLoading = false;
      state.isPaginationLoading = false;
      state.hasMore = true;
    });
    builder.addCase(refetchRockets.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.isPaginationLoading = false;
    });
  },
});

export { rocketsSlice };
