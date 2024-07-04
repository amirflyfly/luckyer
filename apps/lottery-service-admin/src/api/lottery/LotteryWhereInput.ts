import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizerWhereUniqueInput } from "../organizer/OrganizerWhereUniqueInput";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";
import { SharerListRelationFilter } from "../sharer/SharerListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LotteryWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  organizer?: OrganizerWhereUniqueInput;
  participants?: ParticipantListRelationFilter;
  rewards?: RewardListRelationFilter;
  sharers?: SharerListRelationFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  totalRewards?: IntNullableFilter;
};
