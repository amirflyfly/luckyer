import { Sharer } from "../sharer/Sharer";

export type ShareRecord = {
  createdAt: Date;
  id: string;
  participatingCount: number | null;
  sharedWith: string | null;
  sharer?: Sharer | null;
  successfulShare: boolean | null;
  updatedAt: Date;
};
