import * as graphql from "@nestjs/graphql";
import { ShareRecordResolverBase } from "./base/shareRecord.resolver.base";
import { ShareRecord } from "./base/ShareRecord";
import { ShareRecordService } from "./shareRecord.service";

@graphql.Resolver(() => ShareRecord)
export class ShareRecordResolver extends ShareRecordResolverBase {
  constructor(protected readonly service: ShareRecordService) {
    super(service);
  }
}
