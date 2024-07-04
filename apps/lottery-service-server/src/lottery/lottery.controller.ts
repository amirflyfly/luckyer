import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LotteryService } from "./lottery.service";
import { LotteryControllerBase } from "./base/lottery.controller.base";

@swagger.ApiTags("lotteries")
@common.Controller("lotteries")
export class LotteryController extends LotteryControllerBase {
  constructor(protected readonly service: LotteryService) {
    super(service);
  }
}
