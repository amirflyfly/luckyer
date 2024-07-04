import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LOTTERY_TITLE_FIELD } from "../lottery/LotteryTitle";

export const RewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lottery" source="lottery.id" reference="Lottery">
          <TextField source={LOTTERY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="winner" source="winner" />
      </SimpleShowLayout>
    </Show>
  );
};
