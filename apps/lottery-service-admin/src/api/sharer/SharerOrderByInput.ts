import { SortOrder } from "../../util/SortOrder";

export type SharerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  lotteryId?: SortOrder;
  name?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
};
