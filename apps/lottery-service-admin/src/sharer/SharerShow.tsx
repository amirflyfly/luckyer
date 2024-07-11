import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SHARER_TITLE_FIELD } from "./SharerTitle";
import { LOTTERY_TITLE_FIELD } from "../lottery/LotteryTitle";

export const SharerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lottery" source="lottery.id" reference="Lottery">
          <TextField source={LOTTERY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="points" source="points" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ShareRecord"
          target="sharerId"
          label="ShareRecords"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="participatingCount" source="participatingCount" />
            <TextField label="sharedWith" source="sharedWith" />
            <ReferenceField
              label="sharer"
              source="sharer.id"
              reference="Sharer"
            >
              <TextField source={SHARER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="successfulShare" source="successfulShare" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
