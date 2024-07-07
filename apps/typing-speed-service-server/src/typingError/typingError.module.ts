import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TypingErrorModuleBase } from "./base/typingError.module.base";
import { TypingErrorService } from "./typingError.service";
import { TypingErrorController } from "./typingError.controller";
import { TypingErrorResolver } from "./typingError.resolver";

@Module({
  imports: [TypingErrorModuleBase, forwardRef(() => AuthModule)],
  controllers: [TypingErrorController],
  providers: [TypingErrorService, TypingErrorResolver],
  exports: [TypingErrorService],
})
export class TypingErrorModule {}
