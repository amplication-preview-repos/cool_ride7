import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TypingErrorTitle } from "../typingError/TypingErrorTitle";
import { UserTitle } from "../user/UserTitle";
import { TypingTestTitle } from "../typingTest/TypingTestTitle";

export const TypingResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="wordsPerMinute" source="wordsPerMinute" />
        <NumberInput label="accuracy" source="accuracy" />
        <ReferenceArrayInput
          source="typingErrors"
          reference="TypingError"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TypingErrorTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="typingTest.id"
          reference="TypingTest"
          label="TypingTest"
        >
          <SelectInput optionText={TypingTestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
