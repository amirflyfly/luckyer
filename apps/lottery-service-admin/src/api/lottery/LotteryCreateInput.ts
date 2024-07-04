import { OrganizerWhereUniqueInput } from "../organizer/OrganizerWhereUniqueInput";
import { ParticipantCreateNestedManyWithoutLotteriesInput } from "./ParticipantCreateNestedManyWithoutLotteriesInput";
import { RewardCreateNestedManyWithoutLotteriesInput } from "./RewardCreateNestedManyWithoutLotteriesInput";
import { SharerCreateNestedManyWithoutLotteriesInput } from "./SharerCreateNestedManyWithoutLotteriesInput";

export type LotteryCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  organizer?: OrganizerWhereUniqueInput | null;
  participants?: ParticipantCreateNestedManyWithoutLotteriesInput;
  rewards?: RewardCreateNestedManyWithoutLotteriesInput;
  sharers?: SharerCreateNestedManyWithoutLotteriesInput;
  startDate?: Date | null;
  title?: string | null;
  totalRewards?: number | null;
};
