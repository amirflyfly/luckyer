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
import { Lottery } from "./Lottery";
import { LotteryCountArgs } from "./LotteryCountArgs";
import { LotteryFindManyArgs } from "./LotteryFindManyArgs";
import { LotteryFindUniqueArgs } from "./LotteryFindUniqueArgs";
import { CreateLotteryArgs } from "./CreateLotteryArgs";
import { UpdateLotteryArgs } from "./UpdateLotteryArgs";
import { DeleteLotteryArgs } from "./DeleteLotteryArgs";
import { ParticipantFindManyArgs } from "../../participant/base/ParticipantFindManyArgs";
import { Participant } from "../../participant/base/Participant";
import { RewardFindManyArgs } from "../../reward/base/RewardFindManyArgs";
import { Reward } from "../../reward/base/Reward";
import { SharerFindManyArgs } from "../../sharer/base/SharerFindManyArgs";
import { Sharer } from "../../sharer/base/Sharer";
import { Organizer } from "../../organizer/base/Organizer";
import { LotteryService } from "../lottery.service";
@graphql.Resolver(() => Lottery)
export class LotteryResolverBase {
  constructor(protected readonly service: LotteryService) {}

  async _lotteriesMeta(
    @graphql.Args() args: LotteryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Lottery])
  async lotteries(
    @graphql.Args() args: LotteryFindManyArgs
  ): Promise<Lottery[]> {
    return this.service.lotteries(args);
  }

  @graphql.Query(() => Lottery, { nullable: true })
  async lottery(
    @graphql.Args() args: LotteryFindUniqueArgs
  ): Promise<Lottery | null> {
    const result = await this.service.lottery(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Lottery)
  async createLottery(
    @graphql.Args() args: CreateLotteryArgs
  ): Promise<Lottery> {
    return await this.service.createLottery({
      ...args,
      data: {
        ...args.data,

        organizer: args.data.organizer
          ? {
              connect: args.data.organizer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Lottery)
  async updateLottery(
    @graphql.Args() args: UpdateLotteryArgs
  ): Promise<Lottery | null> {
    try {
      return await this.service.updateLottery({
        ...args,
        data: {
          ...args.data,

          organizer: args.data.organizer
            ? {
                connect: args.data.organizer,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Lottery)
  async deleteLottery(
    @graphql.Args() args: DeleteLotteryArgs
  ): Promise<Lottery | null> {
    try {
      return await this.service.deleteLottery(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Participant], { name: "participants" })
  async findParticipants(
    @graphql.Parent() parent: Lottery,
    @graphql.Args() args: ParticipantFindManyArgs
  ): Promise<Participant[]> {
    const results = await this.service.findParticipants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Reward], { name: "rewards" })
  async findRewards(
    @graphql.Parent() parent: Lottery,
    @graphql.Args() args: RewardFindManyArgs
  ): Promise<Reward[]> {
    const results = await this.service.findRewards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Sharer], { name: "sharers" })
  async findSharers(
    @graphql.Parent() parent: Lottery,
    @graphql.Args() args: SharerFindManyArgs
  ): Promise<Sharer[]> {
    const results = await this.service.findSharers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Organizer, {
    nullable: true,
    name: "organizer",
  })
  async getOrganizer(
    @graphql.Parent() parent: Lottery
  ): Promise<Organizer | null> {
    const result = await this.service.getOrganizer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => String)
  async CompleteLottery(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CompleteLottery(args);
  }
}
