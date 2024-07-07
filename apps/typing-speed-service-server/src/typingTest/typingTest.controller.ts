import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TypingTestService } from "./typingTest.service";
import { TypingTestControllerBase } from "./base/typingTest.controller.base";

@swagger.ApiTags("typingTests")
@common.Controller("typingTests")
export class TypingTestController extends TypingTestControllerBase {
  constructor(
    protected readonly service: TypingTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
