/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Organizer } from "./Organizer";
import { OrganizerCountArgs } from "./OrganizerCountArgs";
import { OrganizerFindManyArgs } from "./OrganizerFindManyArgs";
import { OrganizerFindUniqueArgs } from "./OrganizerFindUniqueArgs";
import { CreateOrganizerArgs } from "./CreateOrganizerArgs";
import { UpdateOrganizerArgs } from "./UpdateOrganizerArgs";
import { DeleteOrganizerArgs } from "./DeleteOrganizerArgs";
import { LotteryFindManyArgs } from "../../lottery/base/LotteryFindManyArgs";
import { Lottery } from "../../lottery/base/Lottery";
import { OrganizerService } from "../organizer.service";
@graphql.Resolver(() => Organizer)
export class OrganizerResolverBase {
  constructor(protected readonly service: OrganizerService) {}

  async _organizersMeta(
    @graphql.Args() args: OrganizerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Organizer])
  async organizers(
    @graphql.Args() args: OrganizerFindManyArgs
  ): Promise<Organizer[]> {
    return this.service.organizers(args);
  }

  @graphql.Query(() => Organizer, { nullable: true })
  async organizer(
    @graphql.Args() args: OrganizerFindUniqueArgs
  ): Promise<Organizer | null> {
    const result = await this.service.organizer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Organizer)
  async createOrganizer(
    @graphql.Args() args: CreateOrganizerArgs
  ): Promise<Organizer> {
    return await this.service.createOrganizer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Organizer)
  async updateOrganizer(
    @graphql.Args() args: UpdateOrganizerArgs
  ): Promise<Organizer | null> {
    try {
      return await this.service.updateOrganizer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Organizer)
  async deleteOrganizer(
    @graphql.Args() args: DeleteOrganizerArgs
  ): Promise<Organizer | null> {
    try {
      return await this.service.deleteOrganizer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Lottery], { name: "lotteries" })
  async findLotteries(
    @graphql.Parent() parent: Organizer,
    @graphql.Args() args: LotteryFindManyArgs
  ): Promise<Lottery[]> {
    const results = await this.service.findLotteries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
