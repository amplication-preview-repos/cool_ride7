import { TypingResultWhereUniqueInput } from "../typingResult/TypingResultWhereUniqueInput";

export type TypingErrorCreateInput = {
  errorText?: string | null;
  position?: number | null;
  typingResult?: TypingResultWhereUniqueInput | null;
};
