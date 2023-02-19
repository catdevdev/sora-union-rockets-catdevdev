export interface Rockets {
  id: number;
  title: string;
  rocket_name: string;
  description: string;
}

export type RocketsResponse = Rockets[];

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
