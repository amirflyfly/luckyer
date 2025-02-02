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
  Sharer as PrismaSharer,
  ShareRecord as PrismaShareRecord,
  Lottery as PrismaLottery,
} from "@prisma/client";

export class SharerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SharerCountArgs, "select">): Promise<number> {
    return this.prisma.sharer.count(args);
  }

  async sharers(args: Prisma.SharerFindManyArgs): Promise<PrismaSharer[]> {
    return this.prisma.sharer.findMany(args);
  }
  async sharer(
    args: Prisma.SharerFindUniqueArgs
  ): Promise<PrismaSharer | null> {
    return this.prisma.sharer.findUnique(args);
  }
  async createSharer(args: Prisma.SharerCreateArgs): Promise<PrismaSharer> {
    return this.prisma.sharer.create(args);
  }
  async updateSharer(args: Prisma.SharerUpdateArgs): Promise<PrismaSharer> {
    return this.prisma.sharer.update(args);
  }
  async deleteSharer(args: Prisma.SharerDeleteArgs): Promise<PrismaSharer> {
    return this.prisma.sharer.delete(args);
  }

  async findShareRecords(
    parentId: string,
    args: Prisma.ShareRecordFindManyArgs
  ): Promise<PrismaShareRecord[]> {
    return this.prisma.sharer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .shareRecords(args);
  }

  async getLottery(parentId: string): Promise<PrismaLottery | null> {
    return this.prisma.sharer
      .findUnique({
        where: { id: parentId },
      })
      .lottery();
  }
}
