import { SortOrder } from "../../util/SortOrder";

export type LotteryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  organizerId?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  totalRewards?: SortOrder;
  updatedAt?: SortOrder;
};
