import { Module } from "@nestjs/common";
import { SharerModuleBase } from "./base/sharer.module.base";
import { SharerService } from "./sharer.service";
import { SharerController } from "./sharer.controller";
import { SharerResolver } from "./sharer.resolver";

@Module({
  imports: [SharerModuleBase],
  controllers: [SharerController],
  providers: [SharerService, SharerResolver],
  exports: [SharerService],
})
export class SharerModule {}
