import { SortOrder } from "../../util/SortOrder";

export type TypingErrorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  errorText?: SortOrder;
  position?: SortOrder;
  typingResultId?: SortOrder;
};
