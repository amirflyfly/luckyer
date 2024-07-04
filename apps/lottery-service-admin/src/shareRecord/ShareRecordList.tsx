import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SHARER_TITLE_FIELD } from "../sharer/SharerTitle";

export const ShareRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ShareRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="participatingCount" source="participatingCount" />
        <TextField label="sharedWith" source="sharedWith" />
        <ReferenceField label="sharer" source="sharer.id" reference="Sharer">
          <TextField source={SHARER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="successfulShare" source="successfulShare" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
