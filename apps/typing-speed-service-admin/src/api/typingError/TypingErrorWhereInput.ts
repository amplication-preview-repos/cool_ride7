import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TypingResultWhereUniqueInput } from "../typingResult/TypingResultWhereUniqueInput";

export type TypingErrorWhereInput = {
  id?: StringFilter;
  errorText?: StringNullableFilter;
  position?: IntNullableFilter;
  typingResult?: TypingResultWhereUniqueInput;
};
