import { Lottery } from "../lottery/Lottery";
import { ShareRecord } from "../shareRecord/ShareRecord";

export type Sharer = {
  createdAt: Date;
  email: string | null;
  id: string;
  lottery?: Lottery | null;
  name: string | null;
  points: number | null;
  shareRecords?: Array<ShareRecord>;
  updatedAt: Date;
};
