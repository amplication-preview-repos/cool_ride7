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
  TypingResult as PrismaTypingResult,
  TypingError as PrismaTypingError,
  User as PrismaUser,
  TypingTest as PrismaTypingTest,
} from "@prisma/client";

export class TypingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TypingResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.typingResult.count(args);
  }

  async typingResults(
    args: Prisma.TypingResultFindManyArgs
  ): Promise<PrismaTypingResult[]> {
    return this.prisma.typingResult.findMany(args);
  }
  async typingResult(
    args: Prisma.TypingResultFindUniqueArgs
  ): Promise<PrismaTypingResult | null> {
    return this.prisma.typingResult.findUnique(args);
  }
  async createTypingResult(
    args: Prisma.TypingResultCreateArgs
  ): Promise<PrismaTypingResult> {
    return this.prisma.typingResult.create(args);
  }
  async updateTypingResult(
    args: Prisma.TypingResultUpdateArgs
  ): Promise<PrismaTypingResult> {
    return this.prisma.typingResult.update(args);
  }
  async deleteTypingResult(
    args: Prisma.TypingResultDeleteArgs
  ): Promise<PrismaTypingResult> {
    return this.prisma.typingResult.delete(args);
  }

  async findTypingErrors(
    parentId: string,
    args: Prisma.TypingErrorFindManyArgs
  ): Promise<PrismaTypingError[]> {
    return this.prisma.typingResult
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .typingErrors(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.typingResult
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getTypingTest(parentId: string): Promise<PrismaTypingTest | null> {
    return this.prisma.typingResult
      .findUnique({
        where: { id: parentId },
      })
      .typingTest();
  }
}
