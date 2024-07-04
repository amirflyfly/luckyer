import { OrganizerWhereUniqueInput } from "../organizer/OrganizerWhereUniqueInput";
import { ParticipantUpdateManyWithoutLotteriesInput } from "./ParticipantUpdateManyWithoutLotteriesInput";
import { RewardUpdateManyWithoutLotteriesInput } from "./RewardUpdateManyWithoutLotteriesInput";
import { SharerUpdateManyWithoutLotteriesInput } from "./SharerUpdateManyWithoutLotteriesInput";

export type LotteryUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  organizer?: OrganizerWhereUniqueInput | null;
  participants?: ParticipantUpdateManyWithoutLotteriesInput;
  rewards?: RewardUpdateManyWithoutLotteriesInput;
  sharers?: SharerUpdateManyWithoutLotteriesInput;
  startDate?: Date | null;
  title?: string | null;
  totalRewards?: number | null;
};
