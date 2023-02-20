import { useState } from "react";

import { createRocket } from "@/entities/Rockets/api/createRocket/createRocket";
import { GithubUser, Rocket } from "@/entities/Rockets/models/rockets";
import useAutocomplite from "@/features/GitHubUserAutocompliteInput/hooks/useAutocomplite";
import { useAppDispatch } from "@/shared/hooks/redux";

const useFormAddRocket = () => {
  const dispatch = useAppDispatch();
  const [selectedGithubUserData, selectGithubUserData] =
    useState<GithubUser | null>();

  const onSelectGitHubUser = (userData: GithubUser) => {
    selectGithubUserData(userData);
  };

  const { options, onSelect, onSearch, contextHolder } = useAutocomplite({
    onSelectGitHubUser,
  });

  const onFinish = (
    newRocker: Omit<Rocket, "id" | "isUploding" | "githubUser">
  ) => {
    if (selectedGithubUserData) {
      dispatch(
        createRocket({
          ...newRocker,
          githubUser: selectedGithubUserData,
        })
      );
    }
  };
  return {
    options,
    onSelect,
    onSearch,
    contextHolder,
    onFinish,
    selectedGithubUserData,
  };
};

export default useFormAddRocket;
