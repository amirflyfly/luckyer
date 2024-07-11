import { OrganizerWhereInput } from "./OrganizerWhereInput";
import { OrganizerOrderByInput } from "./OrganizerOrderByInput";

export type OrganizerFindManyArgs = {
  where?: OrganizerWhereInput;
  orderBy?: Array<OrganizerOrderByInput>;
  skip?: number;
  take?: number;
};
