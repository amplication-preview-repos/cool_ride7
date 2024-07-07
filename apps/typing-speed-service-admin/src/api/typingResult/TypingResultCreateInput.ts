import { TypingErrorCreateNestedManyWithoutTypingResultsInput } from "./TypingErrorCreateNestedManyWithoutTypingResultsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TypingTestWhereUniqueInput } from "../typingTest/TypingTestWhereUniqueInput";

export type TypingResultCreateInput = {
  wordsPerMinute?: number | null;
  accuracy?: number | null;
  typingErrors?: TypingErrorCreateNestedManyWithoutTypingResultsInput;
  user?: UserWhereUniqueInput | null;
  typingTest?: TypingTestWhereUniqueInput | null;
};
