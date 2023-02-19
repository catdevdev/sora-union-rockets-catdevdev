import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";

import { AppStore } from "@/app/store/store";
import axios from "@/shared/axios/axiosInstance";

import { RocketsParams, RocketsResponse } from "../models/rockets";

export const fetchMoreRockets = createAsyncThunk(
  "rockets/fetchMoreRockets",
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
        serialize: (params: any) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      },
    });

    return response.data;
  }
);
