import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { SharerTitle } from "../sharer/SharerTitle";

export const ShareRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
