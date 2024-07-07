import { TypingResult } from "../typingResult/TypingResult";

export type TypingTest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typingResults?: Array<TypingResult>;
};
