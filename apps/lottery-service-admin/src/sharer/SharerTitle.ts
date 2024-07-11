import { Sharer as TSharer } from "../api/sharer/Sharer";

export const SHARER_TITLE_FIELD = "name";

export const SharerTitle = (record: TSharer): string => {
  return record.name?.toString() || String(record.id);
};
