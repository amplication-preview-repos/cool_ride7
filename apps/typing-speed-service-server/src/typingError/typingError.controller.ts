import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TypingErrorService } from "./typingError.service";
import { TypingErrorControllerBase } from "./base/typingError.controller.base";

@swagger.ApiTags("typingErrors")
@common.Controller("typingErrors")
export class TypingErrorController extends TypingErrorControllerBase {
  constructor(
    protected readonly service: TypingErrorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
