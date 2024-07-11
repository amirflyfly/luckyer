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
import { ORGANIZER_TITLE_FIELD } from "../organizer/OrganizerTitle";

export const LotteryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lotteries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
