import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/shared/axios/axiosInstance";

import { EditRocketArgument, EditRocketResponse } from "./types";

export const editRocket = createAsyncThunk(
  "rockets/editRocket",
  async (rocket: EditRocketArgument, _): Promise<EditRocketResponse> => {
    const { id, ...rocketToBody } = rocket;

    const response = await axios.patch<EditRocketResponse>(
      `/rockets/${id}`,
      rocketToBody
    );

    return response.data;
  }
);
