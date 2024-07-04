import { Lottery } from "../lottery/Lottery";

export type Participant = {
  createdAt: Date;
  email: string | null;
  id: string;
  lottery?: Lottery | null;
  name: string | null;
  points: number | null;
  updatedAt: Date;
};
