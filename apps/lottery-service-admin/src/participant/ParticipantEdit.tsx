import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { LotteryTitle } from "../lottery/LotteryTitle";

export const ParticipantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="lottery.id" reference="Lottery" label="lottery">
          <SelectInput optionText={LotteryTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="points" source="points" />
      </SimpleForm>
    </Edit>
  );
};
