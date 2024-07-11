import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOTTERY_TITLE_FIELD } from "../lottery/LotteryTitle";

export const ParticipantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Participants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lottery" source="lottery.id" reference="Lottery">
          <TextField source={LOTTERY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="points" source="points" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
