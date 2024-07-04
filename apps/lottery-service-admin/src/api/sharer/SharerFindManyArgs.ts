import { SharerWhereInput } from "./SharerWhereInput";
import { SharerOrderByInput } from "./SharerOrderByInput";

export type SharerFindManyArgs = {
  where?: SharerWhereInput;
  orderBy?: Array<SharerOrderByInput>;
  skip?: number;
  take?: number;
};
