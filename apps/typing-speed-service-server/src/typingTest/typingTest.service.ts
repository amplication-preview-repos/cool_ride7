import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TypingTestServiceBase } from "./base/typingTest.service.base";

@Injectable()
export class TypingTestService extends TypingTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
