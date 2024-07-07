import { InputJsonValue } from "../../types";
import { TypingResultCreateNestedManyWithoutUsersInput } from "./TypingResultCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  avatar?: InputJsonValue;
  typingResults?: TypingResultCreateNestedManyWithoutUsersInput;
};
