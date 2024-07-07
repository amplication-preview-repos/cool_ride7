import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TYPINGTEST_TITLE_FIELD } from "../typingTest/TypingTestTitle";

export const TypingResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TypingResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
