import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { SharerTitle } from "../sharer/SharerTitle";

export const ShareRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="participatingCount"
          source="participatingCount"
        />
        <TextInput label="sharedWith" source="sharedWith" />
        <ReferenceInput source="sharer.id" reference="Sharer" label="sharer">
          <SelectInput optionText={SharerTitle} />
        </ReferenceInput>
        <BooleanInput label="successfulShare" source="successfulShare" />
      </SimpleForm>
    </Create>
  );
};
