import { TypingResult as TTypingResult } from "../api/typingResult/TypingResult";

export const TYPINGRESULT_TITLE_FIELD = "id";

export const TypingResultTitle = (record: TTypingResult): string => {
  return record.id?.toString() || String(record.id);
};
