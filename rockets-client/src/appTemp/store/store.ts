import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { RocketsInitialState } from "@/entities/Rockets/models/rockets";
import { rocketsSlice } from "@/entities/Rockets/slices/rocketsSlice";

const rootReducer = combineReducers({
  rocketsState: rocketsSlice.reducer,
});

const reducerForHydrate = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const reducerForHydrateWithTypes = reducerForHydrate as Reducer<
  CombinedState<{
    rocketsState: RocketsInitialState;
  }>,
  AnyAction
>;

export const setupStore = () => {
  return configureStore({
    reducer: reducerForHydrateWithTypes,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
