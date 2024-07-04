import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SharerServiceBase } from "./base/sharer.service.base";

@Injectable()
export class SharerService extends SharerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
