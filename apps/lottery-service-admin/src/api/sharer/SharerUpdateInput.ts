import { LotteryWhereUniqueInput } from "../lottery/LotteryWhereUniqueInput";
import { ShareRecordUpdateManyWithoutSharersInput } from "./ShareRecordUpdateManyWithoutSharersInput";

export type SharerUpdateInput = {
  email?: string | null;
  lottery?: LotteryWhereUniqueInput | null;
  name?: string | null;
  points?: number | null;
  shareRecords?: ShareRecordUpdateManyWithoutSharersInput;
};
