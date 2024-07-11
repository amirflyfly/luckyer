import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { SHARER_TITLE_FIELD } from "../sharer/SharerTitle";

export const ShareRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="participatingCount" source="participatingCount" />
        <TextField label="sharedWith" source="sharedWith" />
        <ReferenceField label="sharer" source="sharer.id" reference="Sharer">
          <TextField source={SHARER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="successfulShare" source="successfulShare" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
