import { TypingError } from "../typingError/TypingError";
import { User } from "../user/User";
import { TypingTest } from "../typingTest/TypingTest";

export type TypingResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  wordsPerMinute: number | null;
  accuracy: number | null;
  typingErrors?: Array<TypingError>;
  user?: User | null;
  typingTest?: TypingTest | null;
};
