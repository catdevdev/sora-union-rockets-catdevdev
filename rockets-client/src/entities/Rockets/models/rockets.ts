export interface Rocket {
  id: number;
  title: string;
  rocket_name: string;
  description: string;
  isUploading: boolean;
  requestId: string;
  githubUser: GithubUser;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
}

export interface RocketsInitialState {
  rockets: Rocket[];
  page: number;
  isLoading: boolean;
  isPaginationLoading: boolean;
  hasMore: boolean;
  error: string | null | undefined;
}
