import { TypingResult } from "../typingResult/TypingResult";

export type TypingError = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  errorText: string | null;
  position: number | null;
  typingResult?: TypingResult | null;
};
