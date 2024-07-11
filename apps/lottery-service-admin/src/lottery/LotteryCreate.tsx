import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OrganizerTitle } from "../organizer/OrganizerTitle";
import { ParticipantTitle } from "../participant/ParticipantTitle";
import { RewardTitle } from "../reward/RewardTitle";
import { SharerTitle } from "../sharer/SharerTitle";

export const LotteryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="organizer.id"
          reference="Organizer"
          label="organizer"
        >
          <SelectInput optionText={OrganizerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="participants"
          reference="Participant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParticipantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rewards"
          reference="Reward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RewardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sharers"
          reference="Sharer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SharerTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="totalRewards" source="totalRewards" />
      </SimpleForm>
    </Create>
  );
};
