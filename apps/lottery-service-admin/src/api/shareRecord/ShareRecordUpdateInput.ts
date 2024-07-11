import { SharerWhereUniqueInput } from "../sharer/SharerWhereUniqueInput";

export type ShareRecordUpdateInput = {
  participatingCount?: number | null;
  sharedWith?: string | null;
  sharer?: SharerWhereUniqueInput | null;
  successfulShare?: boolean | null;
};
