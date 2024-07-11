import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LotteryTitle } from "../lottery/LotteryTitle";

export const RewardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <ReferenceInput source="lottery.id" reference="Lottery" label="lottery">
          <SelectInput optionText={LotteryTitle} />
        </ReferenceInput>
        <TextInput label="winner" source="winner" />
      </SimpleForm>
    </Edit>
  );
};
