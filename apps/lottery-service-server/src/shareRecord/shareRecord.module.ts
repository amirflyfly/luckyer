import { Module } from "@nestjs/common";
import { ShareRecordModuleBase } from "./base/shareRecord.module.base";
import { ShareRecordService } from "./shareRecord.service";
import { ShareRecordController } from "./shareRecord.controller";
import { ShareRecordResolver } from "./shareRecord.resolver";

@Module({
  imports: [ShareRecordModuleBase],
  controllers: [ShareRecordController],
  providers: [ShareRecordService, ShareRecordResolver],
  exports: [ShareRecordService],
})
export class ShareRecordModule {}
