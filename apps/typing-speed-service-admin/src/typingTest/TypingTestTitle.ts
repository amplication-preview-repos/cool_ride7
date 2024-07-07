import { TypingTest as TTypingTest } from "../api/typingTest/TypingTest";

export const TYPINGTEST_TITLE_FIELD = "name";

export const TypingTestTitle = (record: TTypingTest): string => {
  return record.name?.toString() || String(record.id);
};
