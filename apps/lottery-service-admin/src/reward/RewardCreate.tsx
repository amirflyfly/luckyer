import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LotteryTitle } from "../lottery/LotteryTitle";

export const RewardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <ReferenceInput source="lottery.id" reference="Lottery" label="lottery">
          <SelectInput optionText={LotteryTitle} />
        </ReferenceInput>
        <TextInput label="winner" source="winner" />
      </SimpleForm>
    </Create>
  );
};
