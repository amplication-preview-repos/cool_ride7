import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TypingResultService } from "./typingResult.service";
import { TypingResultControllerBase } from "./base/typingResult.controller.base";

@swagger.ApiTags("typingResults")
@common.Controller("typingResults")
export class TypingResultController extends TypingResultControllerBase {
  constructor(
    protected readonly service: TypingResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
