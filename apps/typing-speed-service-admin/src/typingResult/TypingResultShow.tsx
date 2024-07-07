import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TYPINGRESULT_TITLE_FIELD } from "./TypingResultTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TYPINGTEST_TITLE_FIELD } from "../typingTest/TypingTestTitle";

export const TypingResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wordsPerMinute" source="wordsPerMinute" />
        <TextField label="accuracy" source="accuracy" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="TypingTest"
          source="typingtest.id"
          reference="TypingTest"
        >
          <TextField source={TYPINGTEST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="TypingError"
          target="typingResultId"
          label="TypingErrors"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="errorText" source="errorText" />
            <TextField label="position" source="position" />
            <ReferenceField
              label="TypingResult"
              source="typingresult.id"
              reference="TypingResult"
            >
              <TextField source={TYPINGRESULT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
