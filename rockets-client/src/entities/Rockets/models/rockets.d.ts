export interface Rockets {
  id: number;
  name: string;
  configuration_name: string;
}

export interface RocketsResponse {
  rockets: Rockets[];
}

export interface RocketsInitialState {
  rockets: Rockets[];
  page: number;
  isLoading: boolean;
  isPaginationLoading: boolean;
  hasMore: boolean;
  error: string | null | undefined;
}

export interface RocketsParams {
  page: {
    limit: number;
    number: number;
  };
}
