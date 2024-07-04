import { LotteryWhereInput } from "./LotteryWhereInput";
import { LotteryOrderByInput } from "./LotteryOrderByInput";

export type LotteryFindManyArgs = {
  where?: LotteryWhereInput;
  orderBy?: Array<LotteryOrderByInput>;
  skip?: number;
  take?: number;
};
