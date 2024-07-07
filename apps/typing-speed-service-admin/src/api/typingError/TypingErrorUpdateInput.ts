import { TypingResultWhereUniqueInput } from "../typingResult/TypingResultWhereUniqueInput";

export type TypingErrorUpdateInput = {
  errorText?: string | null;
  position?: number | null;
  typingResult?: TypingResultWhereUniqueInput | null;
};
