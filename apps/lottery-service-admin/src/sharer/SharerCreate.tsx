import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LotteryTitle } from "../lottery/LotteryTitle";
import { ShareRecordTitle } from "../shareRecord/ShareRecordTitle";

export const SharerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="lottery.id" reference="Lottery" label="lottery">
          <SelectInput optionText={LotteryTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="points" source="points" />
        <ReferenceArrayInput
          source="shareRecords"
          reference="ShareRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShareRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
