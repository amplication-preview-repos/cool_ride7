import { JsonValue } from "type-fest";
import { TypingResult } from "../typingResult/TypingResult";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  avatar: JsonValue;
  typingResults?: Array<TypingResult>;
};
