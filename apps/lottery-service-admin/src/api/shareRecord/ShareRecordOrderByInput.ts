import { SortOrder } from "../../util/SortOrder";

export type ShareRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  participatingCount?: SortOrder;
  sharedWith?: SortOrder;
  sharerId?: SortOrder;
  successfulShare?: SortOrder;
  updatedAt?: SortOrder;
};
