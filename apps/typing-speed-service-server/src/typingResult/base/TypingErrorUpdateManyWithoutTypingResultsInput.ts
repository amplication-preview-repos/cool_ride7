/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TypingErrorWhereUniqueInput } from "../../typingError/base/TypingErrorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TypingErrorUpdateManyWithoutTypingResultsInput {
  @Field(() => [TypingErrorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TypingErrorWhereUniqueInput],
  })
  connect?: Array<TypingErrorWhereUniqueInput>;

  @Field(() => [TypingErrorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TypingErrorWhereUniqueInput],
  })
  disconnect?: Array<TypingErrorWhereUniqueInput>;

  @Field(() => [TypingErrorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TypingErrorWhereUniqueInput],
  })
  set?: Array<TypingErrorWhereUniqueInput>;
}

export { TypingErrorUpdateManyWithoutTypingResultsInput as TypingErrorUpdateManyWithoutTypingResultsInput };
