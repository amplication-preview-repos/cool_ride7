import { TypingResultWhereInput } from "./TypingResultWhereInput";
import { TypingResultOrderByInput } from "./TypingResultOrderByInput";

export type TypingResultFindManyArgs = {
  where?: TypingResultWhereInput;
  orderBy?: Array<TypingResultOrderByInput>;
  skip?: number;
  take?: number;
};
