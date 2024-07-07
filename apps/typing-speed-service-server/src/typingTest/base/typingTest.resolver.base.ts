/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TypingTest } from "./TypingTest";
import { TypingTestCountArgs } from "./TypingTestCountArgs";
import { TypingTestFindManyArgs } from "./TypingTestFindManyArgs";
import { TypingTestFindUniqueArgs } from "./TypingTestFindUniqueArgs";
import { CreateTypingTestArgs } from "./CreateTypingTestArgs";
import { UpdateTypingTestArgs } from "./UpdateTypingTestArgs";
import { DeleteTypingTestArgs } from "./DeleteTypingTestArgs";
import { TypingResultFindManyArgs } from "../../typingResult/base/TypingResultFindManyArgs";
import { TypingResult } from "../../typingResult/base/TypingResult";
import { TypingTestService } from "../typingTest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TypingTest)
export class TypingTestResolverBase {
  constructor(
    protected readonly service: TypingTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "read",
    possession: "any",
  })
  async _typingTestsMeta(
    @graphql.Args() args: TypingTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TypingTest])
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "read",
    possession: "any",
  })
  async typingTests(
    @graphql.Args() args: TypingTestFindManyArgs
  ): Promise<TypingTest[]> {
    return this.service.typingTests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TypingTest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "read",
    possession: "own",
  })
  async typingTest(
    @graphql.Args() args: TypingTestFindUniqueArgs
  ): Promise<TypingTest | null> {
    const result = await this.service.typingTest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TypingTest)
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "create",
    possession: "any",
  })
  async createTypingTest(
    @graphql.Args() args: CreateTypingTestArgs
  ): Promise<TypingTest> {
    return await this.service.createTypingTest({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TypingTest)
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "update",
    possession: "any",
  })
  async updateTypingTest(
    @graphql.Args() args: UpdateTypingTestArgs
  ): Promise<TypingTest | null> {
    try {
      return await this.service.updateTypingTest({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TypingTest)
  @nestAccessControl.UseRoles({
    resource: "TypingTest",
    action: "delete",
    possession: "any",
  })
  async deleteTypingTest(
    @graphql.Args() args: DeleteTypingTestArgs
  ): Promise<TypingTest | null> {
    try {
      return await this.service.deleteTypingTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [TypingResult], { name: "typingResults" })
  @nestAccessControl.UseRoles({
    resource: "TypingResult",
    action: "read",
    possession: "any",
  })
  async findTypingResults(
    @graphql.Parent() parent: TypingTest,
    @graphql.Args() args: TypingResultFindManyArgs
  ): Promise<TypingResult[]> {
    const results = await this.service.findTypingResults(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}