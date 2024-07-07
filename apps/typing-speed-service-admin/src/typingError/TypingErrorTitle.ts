import { TypingError as TTypingError } from "../api/typingError/TypingError";

export const TYPINGERROR_TITLE_FIELD = "id";

export const TypingErrorTitle = (record: TTypingError): string => {
  return record.id?.toString() || String(record.id);
};
