import { Module } from "@nestjs/common";
import { LotteryModuleBase } from "./base/lottery.module.base";
import { LotteryService } from "./lottery.service";
import { LotteryController } from "./lottery.controller";
import { LotteryResolver } from "./lottery.resolver";

@Module({
  imports: [LotteryModuleBase],
  controllers: [LotteryController],
  providers: [LotteryService, LotteryResolver],
  exports: [LotteryService],
})
export class LotteryModule {}
