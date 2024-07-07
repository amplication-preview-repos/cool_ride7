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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TypingErrorListRelationFilter } from "../../typingError/base/TypingErrorListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TypingTestWhereUniqueInput } from "../../typingTest/base/TypingTestWhereUniqueInput";

@InputType()
class TypingResultWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  wordsPerMinute?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  accuracy?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TypingErrorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TypingErrorListRelationFilter)
  @IsOptional()
  @Field(() => TypingErrorListRelationFilter, {
    nullable: true,
  })
  typingErrors?: TypingErrorListRelationFilter;

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
  user?: UserWhereUniqueInput;

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
  typingTest?: TypingTestWhereUniqueInput;
}

export { TypingResultWhereInput as TypingResultWhereInput };