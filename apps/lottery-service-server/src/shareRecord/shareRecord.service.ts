import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShareRecordServiceBase } from "./base/shareRecord.service.base";

@Injectable()
export class ShareRecordService extends ShareRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
