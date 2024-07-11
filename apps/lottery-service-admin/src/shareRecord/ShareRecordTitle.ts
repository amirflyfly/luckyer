import { ShareRecord as TShareRecord } from "../api/shareRecord/ShareRecord";

export const SHARERECORD_TITLE_FIELD = "sharedWith";

export const ShareRecordTitle = (record: TShareRecord): string => {
  return record.sharedWith?.toString() || String(record.id);
};
