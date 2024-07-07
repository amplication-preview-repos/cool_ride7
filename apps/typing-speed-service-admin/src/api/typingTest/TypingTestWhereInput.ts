import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TypingResultListRelationFilter } from "../typingResult/TypingResultListRelationFilter";

export type TypingTestWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typingResults?: TypingResultListRelationFilter;
};
