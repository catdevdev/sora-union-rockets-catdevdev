import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { createRocket } from "../api/createRocket/createRocket";
import { deleteRocketById } from "../api/deleteRocketById/deleteRocketById";
import { fetchMoreRockets } from "../api/fetchMoreRockets/fetchMoreRockets";
import { fetchRockets } from "../api/fetchRockets/fetchRockets";
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
      state.rockets = action.payload.map((rocket) => ({
        ...rocket,
        isUploading: false,
        requestId: action.meta.requestId,
      }));
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
      console.log(action.payload);
      if (action.payload.length === 0) {
        state.hasMore = false;
        state.isLoading = false;
      }
      state.rockets = [
        ...action.payload.map((rocket) => ({
          ...rocket,
          isUploading: false,
          requestId: action.meta.requestId,
        })),
        ...state.rockets,
      ];

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

    //

    builder.addCase(createRocket.pending, (state, action) => {
      state.rockets = [
        ...state.rockets,
        {
          id: uuidv4() as unknown as number,
          title: action.meta.arg.title,
          rocket_name: action.meta.arg.rocket_name,
          description: action.meta.arg.description,
          isUploading: true,
          requestId: action.meta.requestId,
          githubUser: {
            login: action.meta.arg.githubUser.login,
            avatar_url: action.meta.arg.githubUser.avatar_url,
          },
        },
      ];
    });
    builder.addCase(createRocket.fulfilled, (state, action) => {
      state.rockets.forEach((rocket, index) => {
        if (rocket.requestId === action.meta.requestId) {
          state.rockets[index] = {
            id: action.payload.id,
            title: action.payload.title,
            rocket_name: action.payload.rocket_name,
            description: action.payload.description,
            isUploading: false,
            requestId: action.meta.requestId,
            githubUser: {
              login: action.meta.arg.githubUser.login,
              avatar_url: action.meta.arg.githubUser.avatar_url,
            },
          };
        }
      });
    });
    builder.addCase(createRocket.rejected, (state, action) => {});

    builder.addCase(deleteRocketById.pending, (state, action) => {
      state.rockets.forEach((rocket, index) => {
        if (rocket.id === action.meta.arg.id) {
          state.rockets[index].isUploading = true;
        }
      });
    });
    builder.addCase(deleteRocketById.fulfilled, (state, action) => {
      state.rockets = state.rockets.filter(
        (rocket) => rocket.id !== action.meta.arg.id
      );
    });
    builder.addCase(deleteRocketById.rejected, (state, action) => {});
  },
});

export { rocketsSlice };
