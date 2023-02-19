import { Rocket } from "../../models/rockets";

export type CreateRocketResponse = Omit<Rocket, "isUploading">;
export type CreateArgument = Omit<Rocket, "isUploading">;
