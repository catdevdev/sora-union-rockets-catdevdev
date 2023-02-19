import { Rocket } from "../../models/rockets";

export type RocketsResponse = Omit<Rocket, "isUploading">[];

export interface RocketsParams {
  _page: number;
  _limit: number;
}
