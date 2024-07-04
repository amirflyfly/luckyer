import { LotteryCreateNestedManyWithoutOrganizersInput } from "./LotteryCreateNestedManyWithoutOrganizersInput";

export type OrganizerCreateInput = {
  email?: string | null;
  lotteries?: LotteryCreateNestedManyWithoutOrganizersInput;
  name?: string | null;
  points?: number | null;
};
