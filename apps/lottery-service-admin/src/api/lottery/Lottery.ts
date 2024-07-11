import { Organizer } from "../organizer/Organizer";
import { Participant } from "../participant/Participant";
import { Reward } from "../reward/Reward";
import { Sharer } from "../sharer/Sharer";

export type Lottery = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  organizer?: Organizer | null;
  participants?: Array<Participant>;
  rewards?: Array<Reward>;
  sharers?: Array<Sharer>;
  startDate: Date | null;
  title: string | null;
  totalRewards: number | null;
  updatedAt: Date;
};
