import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TypingResultTitle } from "../typingResult/TypingResultTitle";

export const TypingErrorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errorText" multiline source="errorText" />
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput
          source="typingResult.id"
          reference="TypingResult"
          label="TypingResult"
        >
          <SelectInput optionText={TypingResultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
