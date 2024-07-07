import { SortOrder } from "../../util/SortOrder";

export type TypingResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  wordsPerMinute?: SortOrder;
  accuracy?: SortOrder;
  userId?: SortOrder;
  typingTestId?: SortOrder;
};
