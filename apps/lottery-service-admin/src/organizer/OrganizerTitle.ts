import { Organizer as TOrganizer } from "../api/organizer/Organizer";

export const ORGANIZER_TITLE_FIELD = "name";

export const OrganizerTitle = (record: TOrganizer): string => {
  return record.name?.toString() || String(record.id);
};
