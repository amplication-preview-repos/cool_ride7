import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TypingErrorListRelationFilter } from "../typingError/TypingErrorListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TypingTestWhereUniqueInput } from "../typingTest/TypingTestWhereUniqueInput";

export type TypingResultWhereInput = {
  id?: StringFilter;
  wordsPerMinute?: IntNullableFilter;
  accuracy?: FloatNullableFilter;
  typingErrors?: TypingErrorListRelationFilter;
  user?: UserWhereUniqueInput;
  typingTest?: TypingTestWhereUniqueInput;
};
