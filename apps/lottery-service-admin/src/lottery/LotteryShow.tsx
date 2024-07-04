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
} from "react-admin";

import { LOTTERY_TITLE_FIELD } from "./LotteryTitle";
import { ORGANIZER_TITLE_FIELD } from "../organizer/OrganizerTitle";

export const LotteryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="organizer"
          source="organizer.id"
          reference="Organizer"
        >
          <TextField source={ORGANIZER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <TextField label="title" source="title" />
        <TextField label="totalRewards" source="totalRewards" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Participant"
          target="lotteryId"
          label="Participants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lottery"
              source="lottery.id"
              reference="Lottery"
            >
              <TextField source={LOTTERY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="points" source="points" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reward"
          target="lotteryId"
          label="Rewards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lottery"
              source="lottery.id"
              reference="Lottery"
            >
              <TextField source={LOTTERY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="winner" source="winner" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Sharer"
          target="lotteryId"
          label="Sharers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lottery"
              source="lottery.id"
              reference="Lottery"
            >
              <TextField source={LOTTERY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="points" source="points" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
