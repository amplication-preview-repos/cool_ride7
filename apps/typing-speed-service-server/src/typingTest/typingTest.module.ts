import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TypingTestModuleBase } from "./base/typingTest.module.base";
import { TypingTestService } from "./typingTest.service";
import { TypingTestController } from "./typingTest.controller";
import { TypingTestResolver } from "./typingTest.resolver";

@Module({
  imports: [TypingTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [TypingTestController],
  providers: [TypingTestService, TypingTestResolver],
  exports: [TypingTestService],
})
export class TypingTestModule {}
