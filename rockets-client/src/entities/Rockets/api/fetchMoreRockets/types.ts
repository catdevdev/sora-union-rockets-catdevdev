import { Rocket } from "../../models/rockets";

export type RocketsResponse = Omit<Rocket, "isUploading">[];

export interface RocketsParams {
  page: {
    limit: number;
    number: number;
  };
}
