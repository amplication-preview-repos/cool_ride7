import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TYPINGRESULT_TITLE_FIELD } from "../typingResult/TypingResultTitle";

export const TypingErrorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
