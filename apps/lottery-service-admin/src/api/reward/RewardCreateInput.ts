import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";

export type RewardCreateInput = {
  description?: string | null;
  lottery?: LotteryWhereUniqueInput | null;
  winner?: string | null;
};
