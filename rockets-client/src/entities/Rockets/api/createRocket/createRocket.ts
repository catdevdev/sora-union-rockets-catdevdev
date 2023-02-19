import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/shared/axios/axiosInstance";

import { CreateArgument, CreateRocketResponse } from "./types";

export const createRocket = createAsyncThunk(
  "rockets/createRocket",
  async (rocket: CreateArgument, _): Promise<CreateRocketResponse> => {
    const response = await axios.post<CreateRocketResponse>(`/rockets`, rocket);

    return response.data;
  }
);
