import { LotteryUpdateManyWithoutOrganizersInput } from "./LotteryUpdateManyWithoutOrganizersInput";

export type OrganizerUpdateInput = {
  email?: string | null;
  lotteries?: LotteryUpdateManyWithoutOrganizersInput;
  name?: string | null;
  points?: number | null;
};
