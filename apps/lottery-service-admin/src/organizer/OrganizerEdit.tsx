import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { LotteryTitle } from "../lottery/LotteryTitle";

export const OrganizerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="lotteries"
          reference="Lottery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LotteryTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="points" source="points" />
      </SimpleForm>
    </Edit>
  );
};
