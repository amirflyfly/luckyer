import { Participant as TParticipant } from "../api/participant/Participant";

export const PARTICIPANT_TITLE_FIELD = "name";

export const ParticipantTitle = (record: TParticipant): string => {
  return record.name?.toString() || String(record.id);
};
