import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShareRecordService } from "./shareRecord.service";
import { ShareRecordControllerBase } from "./base/shareRecord.controller.base";

@swagger.ApiTags("shareRecords")
@common.Controller("shareRecords")
export class ShareRecordController extends ShareRecordControllerBase {
  constructor(protected readonly service: ShareRecordService) {
    super(service);
  }
}
