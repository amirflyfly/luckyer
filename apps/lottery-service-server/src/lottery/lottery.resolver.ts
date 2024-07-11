import * as graphql from "@nestjs/graphql";
import { LotteryResolverBase } from "./base/lottery.resolver.base";
import { Lottery } from "./base/Lottery";
import { LotteryService } from "./lottery.service";

@graphql.Resolver(() => Lottery)
export class LotteryResolver extends LotteryResolverBase {
  constructor(protected readonly service: LotteryService) {
    super(service);
  }
}
