import { Lottery as TLottery } from "../api/lottery/Lottery";

export const LOTTERY_TITLE_FIELD = "title";

export const LotteryTitle = (record: TLottery): string => {
  return record.title?.toString() || String(record.id);
};
