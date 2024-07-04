import { ShareRecordWhereInput } from "./ShareRecordWhereInput";
import { ShareRecordOrderByInput } from "./ShareRecordOrderByInput";

export type ShareRecordFindManyArgs = {
  where?: ShareRecordWhereInput;
  orderBy?: Array<ShareRecordOrderByInput>;
  skip?: number;
  take?: number;
};
