import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/shared/axios/axiosInstance";

import { DeleteArgument, DeleteResponse } from "./types";

export const deleteRocketById = createAsyncThunk(
  "rockets/deleteRocketById",
  async ({ id }: DeleteArgument, _): Promise<DeleteResponse> => {
    const response = await axios.delete<DeleteResponse>(`/rockets/${id}`);

    return response.data;
  }
);
