import { Lottery } from "../lottery/Lottery";

export type Reward = {
  createdAt: Date;
  description: string | null;
  id: string;
  lottery?: Lottery | null;
  updatedAt: Date;
  winner: string | null;
};
