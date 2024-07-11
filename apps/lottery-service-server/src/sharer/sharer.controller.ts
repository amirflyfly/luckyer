import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SharerService } from "./sharer.service";
import { SharerControllerBase } from "./base/sharer.controller.base";

@swagger.ApiTags("sharers")
@common.Controller("sharers")
export class SharerController extends SharerControllerBase {
  constructor(protected readonly service: SharerService) {
    super(service);
  }
}
