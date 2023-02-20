import axios, { CancelTokenSource } from "axios";
import { useRef, useState } from "react";

import { GithubUser } from "@/entities/Rockets/models/rockets";

interface GithubSearchResult {
  items: [
    {
      login: string;
    }
  ];
}

interface AutocompliteHookProps {
  onSelectGitHubUser: (userData: GithubUser) => void;
}

const useAutocomplite = ({ onSelectGitHubUser }: AutocompliteHookProps) => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

  const onSearch = async (searchText: string) => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel();
    }

    setOptions([{ value: "loading.." }]);

    const cancelTokenSource = axios.CancelToken.source();
    cancelTokenSourceRef.current = cancelTokenSource;
    try {
      let res = await axios.get<GithubSearchResult>(
        "https://api.github.com/search/users",
        {
          params: { q: searchText },
          cancelToken: cancelTokenSource.token,
        }
      );
      setOptions(
        !searchText ? [] : res.data.items.map((item) => ({ value: item.login }))
      );
    } catch (err) {
      setOptions([]);
    }
  };

  const onSelect = async (selectedUser: string) => {
    try {
      let res = await axios.get<GithubUser>(
        `https://api.github.com/users/${selectedUser}`
      );
      onSelectGitHubUser(res.data);
    } catch (err) {}
  };
  return { options, onSearch, onSelect };
};

export default useAutocomplite;
