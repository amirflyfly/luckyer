import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SharerWhereUniqueInput } from "../sharer/SharerWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ShareRecordWhereInput = {
  id?: StringFilter;
  participatingCount?: IntNullableFilter;
  sharedWith?: StringNullableFilter;
  sharer?: SharerWhereUniqueInput;
  successfulShare?: BooleanNullableFilter;
};
