import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { LotteryTitle } from "../lottery/LotteryTitle";

export const OrganizerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
