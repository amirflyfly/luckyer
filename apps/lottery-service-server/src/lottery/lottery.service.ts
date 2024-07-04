import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LotteryServiceBase } from "./base/lottery.service.base";

@Injectable()
export class LotteryService extends LotteryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
