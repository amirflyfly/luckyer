import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";

export type RewardWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  lottery?: LotteryWhereUniqueInput;
  winner?: StringNullableFilter;
};
