import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TypingResultServiceBase } from "./base/typingResult.service.base";

@Injectable()
export class TypingResultService extends TypingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
