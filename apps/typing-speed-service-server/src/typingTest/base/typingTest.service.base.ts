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
  TypingTest as PrismaTypingTest,
  TypingResult as PrismaTypingResult,
} from "@prisma/client";

export class TypingTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TypingTestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.typingTest.count(args);
  }

  async typingTests(
    args: Prisma.TypingTestFindManyArgs
  ): Promise<PrismaTypingTest[]> {
    return this.prisma.typingTest.findMany(args);
  }
  async typingTest(
    args: Prisma.TypingTestFindUniqueArgs
  ): Promise<PrismaTypingTest | null> {
    return this.prisma.typingTest.findUnique(args);
  }
  async createTypingTest(
    args: Prisma.TypingTestCreateArgs
  ): Promise<PrismaTypingTest> {
    return this.prisma.typingTest.create(args);
  }
  async updateTypingTest(
    args: Prisma.TypingTestUpdateArgs
  ): Promise<PrismaTypingTest> {
    return this.prisma.typingTest.update(args);
  }
  async deleteTypingTest(
    args: Prisma.TypingTestDeleteArgs
  ): Promise<PrismaTypingTest> {
    return this.prisma.typingTest.delete(args);
  }

  async findTypingResults(
    parentId: string,
    args: Prisma.TypingResultFindManyArgs
  ): Promise<PrismaTypingResult[]> {
    return this.prisma.typingTest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .typingResults(args);
  }
}