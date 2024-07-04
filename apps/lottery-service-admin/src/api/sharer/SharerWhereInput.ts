import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShareRecordListRelationFilter } from "../shareRecord/ShareRecordListRelationFilter";

export type SharerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lottery?: LotteryWhereUniqueInput;
  name?: StringNullableFilter;
  points?: IntNullableFilter;
  shareRecords?: ShareRecordListRelationFilter;
};
