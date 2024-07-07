import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TypingResultTitle } from "../typingResult/TypingResultTitle";

export const TypingErrorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
