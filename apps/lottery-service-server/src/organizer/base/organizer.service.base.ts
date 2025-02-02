/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Organizer as PrismaOrganizer,
  Lottery as PrismaLottery,
} from "@prisma/client";

export class OrganizerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrganizerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.organizer.count(args);
  }

  async organizers(
    args: Prisma.OrganizerFindManyArgs
  ): Promise<PrismaOrganizer[]> {
    return this.prisma.organizer.findMany(args);
  }
  async organizer(
    args: Prisma.OrganizerFindUniqueArgs
  ): Promise<PrismaOrganizer | null> {
    return this.prisma.organizer.findUnique(args);
  }
  async createOrganizer(
    args: Prisma.OrganizerCreateArgs
  ): Promise<PrismaOrganizer> {
    return this.prisma.organizer.create(args);
  }
  async updateOrganizer(
    args: Prisma.OrganizerUpdateArgs
  ): Promise<PrismaOrganizer> {
    return this.prisma.organizer.update(args);
  }
  async deleteOrganizer(
    args: Prisma.OrganizerDeleteArgs
  ): Promise<PrismaOrganizer> {
    return this.prisma.organizer.delete(args);
  }

  async findLotteries(
    parentId: string,
    args: Prisma.LotteryFindManyArgs
  ): Promise<PrismaLottery[]> {
    return this.prisma.organizer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .lotteries(args);
  }
}
