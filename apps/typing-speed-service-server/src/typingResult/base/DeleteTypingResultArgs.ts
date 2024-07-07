/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TypingResultWhereUniqueInput } from "./TypingResultWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTypingResultArgs {
  @ApiProperty({
    required: true,
    type: () => TypingResultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TypingResultWhereUniqueInput)
  @Field(() => TypingResultWhereUniqueInput, { nullable: false })
  where!: TypingResultWhereUniqueInput;
}

export { DeleteTypingResultArgs as DeleteTypingResultArgs };