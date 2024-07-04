import { SharerWhereUniqueInput } from "../sharer/SharerWhereUniqueInput";

export type ShareRecordCreateInput = {
  participatingCount?: number | null;
  sharedWith?: string | null;
  sharer?: SharerWhereUniqueInput | null;
  successfulShare?: boolean | null;
};
