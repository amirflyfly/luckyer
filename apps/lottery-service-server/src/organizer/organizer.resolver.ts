import * as graphql from "@nestjs/graphql";
import { OrganizerResolverBase } from "./base/organizer.resolver.base";
import { Organizer } from "./base/Organizer";
import { OrganizerService } from "./organizer.service";

@graphql.Resolver(() => Organizer)
export class OrganizerResolver extends OrganizerResolverBase {
  constructor(protected readonly service: OrganizerService) {
    super(service);
  }
}
