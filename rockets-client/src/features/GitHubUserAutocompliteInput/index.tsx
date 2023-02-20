import { AutoComplete } from "antd";
import axios, { CancelTokenSource } from "axios";
import { useRef, useState } from "react";

import { GithubUser } from "@/entities/Rockets/models/rockets";

import useAutocomplite from "./useAutocomplite";

interface GitHubUserAutocompliteProps {
  onSelectGitHubUser: (userData: GithubUser) => void;
}

const GitHubUserAutocompliteInput = ({
  onSelectGitHubUser,
}: GitHubUserAutocompliteProps) => {
  const { options, onSelect, onSearch } = useAutocomplite({
    onSelectGitHubUser,
  });

  return (
    <AutoComplete
      options={options}
      style={{ width: "100%" }}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="Input Here"
    />
  );
};

export default GitHubUserAutocompliteInput;
