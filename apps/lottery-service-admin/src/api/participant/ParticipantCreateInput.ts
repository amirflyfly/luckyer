import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";

export type ParticipantCreateInput = {
  email?: string | null;
  lottery?: LotteryWhereUniqueInput | null;
  name?: string | null;
  points?: number | null;
};
