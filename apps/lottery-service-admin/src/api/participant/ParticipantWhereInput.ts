import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ParticipantWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lottery?: LotteryWhereUniqueInput;
  name?: StringNullableFilter;
  points?: IntNullableFilter;
};
