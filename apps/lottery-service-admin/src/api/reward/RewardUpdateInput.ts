import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";

export type RewardUpdateInput = {
  description?: string | null;
  lottery?: LotteryWhereUniqueInput | null;
  winner?: string | null;
};
