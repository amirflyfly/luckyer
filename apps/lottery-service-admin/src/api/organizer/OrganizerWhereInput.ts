import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LotteryListRelationFilter } from "../lottery/LotteryListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrganizerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lotteries?: LotteryListRelationFilter;
  name?: StringNullableFilter;
  points?: IntNullableFilter;
};
