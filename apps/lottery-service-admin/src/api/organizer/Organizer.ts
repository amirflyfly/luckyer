import { Lottery } from "../lottery/Lottery";

export type Organizer = {
  createdAt: Date;
  email: string | null;
  id: string;
  lotteries?: Array<Lottery>;
  name: string | null;
  points: number | null;
  updatedAt: Date;
};
