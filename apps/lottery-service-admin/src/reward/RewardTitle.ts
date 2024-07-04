import { Reward as TReward } from "../api/reward/Reward";

export const REWARD_TITLE_FIELD = "description";

export const RewardTitle = (record: TReward): string => {
  return record.description?.toString() || String(record.id);
};
