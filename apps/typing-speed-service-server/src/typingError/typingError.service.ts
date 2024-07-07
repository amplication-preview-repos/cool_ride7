import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TypingErrorServiceBase } from "./base/typingError.service.base";

@Injectable()
export class TypingErrorService extends TypingErrorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
