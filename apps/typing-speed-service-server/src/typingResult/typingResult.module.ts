import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TypingResultModuleBase } from "./base/typingResult.module.base";
import { TypingResultService } from "./typingResult.service";
import { TypingResultController } from "./typingResult.controller";
import { TypingResultResolver } from "./typingResult.resolver";

@Module({
  imports: [TypingResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [TypingResultController],
  providers: [TypingResultService, TypingResultResolver],
  exports: [TypingResultService],
})
export class TypingResultModule {}
