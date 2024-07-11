import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lotteryId?: SortOrder;
  updatedAt?: SortOrder;
  winner?: SortOrder;
};
