import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";
import { ShareRecordCreateNestedManyWithoutSharersInput } from "./ShareRecordCreateNestedManyWithoutSharersInput";

export type SharerCreateInput = {
  email?: string | null;
  lottery?: LotteryWhereUniqueInput | null;
  name?: string | null;
  points?: number | null;
  shareRecords?: ShareRecordCreateNestedManyWithoutSharersInput;
};
