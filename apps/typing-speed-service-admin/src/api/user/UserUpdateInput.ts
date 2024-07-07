import { InputJsonValue } from "../../types";
import { TypingResultUpdateManyWithoutUsersInput } from "./TypingResultUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  avatar?: InputJsonValue;
  typingResults?: TypingResultUpdateManyWithoutUsersInput;
};
