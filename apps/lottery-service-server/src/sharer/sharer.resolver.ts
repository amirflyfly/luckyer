import * as graphql from "@nestjs/graphql";
import { SharerResolverBase } from "./base/sharer.resolver.base";
import { Sharer } from "./base/Sharer";
import { SharerService } from "./sharer.service";

@graphql.Resolver(() => Sharer)
export class SharerResolver extends SharerResolverBase {
  constructor(protected readonly service: SharerService) {
    super(service);
  }
}
