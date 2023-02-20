import React from "react";

import { fetchMoreRockets } from "@/entities/Rockets";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";

const useInfinityScroling = () => {
  const dispatch = useAppDispatch();
  const { isLoading, hasMore, rockets } = useAppSelector(
    (state) => state.rocketsState
  );

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      dispatch(fetchMoreRockets());
    }
  };
  return { rockets, fetchMoreData, hasMore };
};

export default useInfinityScroling;
