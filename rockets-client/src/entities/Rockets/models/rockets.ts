export interface Rocket {
  id: number;
  title: string;
  rocket_name: string;
  description: string;
  isUploading: boolean;
}

export interface RocketsInitialState {
  rockets: Rocket[];
  page: number;
  isLoading: boolean;
  isPaginationLoading: boolean;
  hasMore: boolean;
  error: string | null | undefined;
}
