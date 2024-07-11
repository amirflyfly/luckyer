import { Module } from "@nestjs/common";
import { OrganizerModuleBase } from "./base/organizer.module.base";
import { OrganizerService } from "./organizer.service";
import { OrganizerController } from "./organizer.controller";
import { OrganizerResolver } from "./organizer.resolver";

@Module({
  imports: [OrganizerModuleBase],
  controllers: [OrganizerController],
  providers: [OrganizerService, OrganizerResolver],
  exports: [OrganizerService],
})
export class OrganizerModule {}
