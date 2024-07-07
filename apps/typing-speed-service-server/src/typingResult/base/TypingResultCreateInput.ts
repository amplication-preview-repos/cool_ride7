/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { TypingErrorCreateNestedManyWithoutTypingResultsInput } from "./TypingErrorCreateNestedManyWithoutTypingResultsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TypingTestWhereUniqueInput } from "../../typingTest/base/TypingTestWhereUniqueInput";

@InputType()
class TypingResultCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  wordsPerMinute?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  accuracy?: number | null;

  @ApiProperty({
    required: false,
    type: () => TypingErrorCreateNestedManyWithoutTypingResultsInput,
  })
  @ValidateNested()
  @Type(() => TypingErrorCreateNestedManyWithoutTypingResultsInput)
  @IsOptional()
  @Field(() => TypingErrorCreateNestedManyWithoutTypingResultsInput, {
    nullable: true,
  })
  typingErrors?: TypingErrorCreateNestedManyWithoutTypingResultsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TypingTestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TypingTestWhereUniqueInput)
  @IsOptional()
  @Field(() => TypingTestWhereUniqueInput, {
    nullable: true,
  })
  typingTest?: TypingTestWhereUniqueInput | null;
}

export { TypingResultCreateInput as TypingResultCreateInput };
