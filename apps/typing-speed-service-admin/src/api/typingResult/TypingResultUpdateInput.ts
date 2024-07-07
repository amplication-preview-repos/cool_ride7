import { TypingErrorUpdateManyWithoutTypingResultsInput } from "./TypingErrorUpdateManyWithoutTypingResultsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TypingTestWhereUniqueInput } from "../typingTest/TypingTestWhereUniqueInput";

export type TypingResultUpdateInput = {
  wordsPerMinute?: number | null;
  accuracy?: number | null;
  typingErrors?: TypingErrorUpdateManyWithoutTypingResultsInput;
  user?: UserWhereUniqueInput | null;
  typingTest?: TypingTestWhereUniqueInput | null;
};
