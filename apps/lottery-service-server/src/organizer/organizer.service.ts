import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizerServiceBase } from "./base/organizer.service.base";

@Injectable()
export class OrganizerService extends OrganizerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
