import { TypingResultCreateNestedManyWithoutTypingTestsInput } from "./TypingResultCreateNestedManyWithoutTypingTestsInput";

export type TypingTestCreateInput = {
  name?: string | null;
  typingResults?: TypingResultCreateNestedManyWithoutTypingTestsInput;
};
