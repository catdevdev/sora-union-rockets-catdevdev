import { PartialWithRequired } from "@/shared/types/types";

import { Rocket } from "../../models/rockets";

export type EditRocketResponse = Omit<Rocket, "isUploading">;
export type EditRocketArgument = PartialWithRequired<
  Omit<Rocket, "isUploding">,
  "id"
>;
