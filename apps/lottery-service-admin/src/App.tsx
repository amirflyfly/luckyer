import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LotteryList } from "./lottery/LotteryList";
import { LotteryCreate } from "./lottery/LotteryCreate";
import { LotteryEdit } from "./lottery/LotteryEdit";
import { LotteryShow } from "./lottery/LotteryShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { ParticipantList } from "./participant/ParticipantList";
import { ParticipantCreate } from "./participant/ParticipantCreate";
import { ParticipantEdit } from "./participant/ParticipantEdit";
import { ParticipantShow } from "./participant/ParticipantShow";
import { ShareRecordList } from "./shareRecord/ShareRecordList";
import { ShareRecordCreate } from "./shareRecord/ShareRecordCreate";
import { ShareRecordEdit } from "./shareRecord/ShareRecordEdit";
import { ShareRecordShow } from "./shareRecord/ShareRecordShow";
import { SharerList } from "./sharer/SharerList";
import { SharerCreate } from "./sharer/SharerCreate";
import { SharerEdit } from "./sharer/SharerEdit";
import { SharerShow } from "./sharer/SharerShow";
import { OrganizerList } from "./organizer/OrganizerList";
import { OrganizerCreate } from "./organizer/OrganizerCreate";
import { OrganizerEdit } from "./organizer/OrganizerEdit";
import { OrganizerShow } from "./organizer/OrganizerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LotteryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Lottery"
          list={LotteryList}
          edit={LotteryEdit}
          create={LotteryCreate}
          show={LotteryShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="Participant"
          list={ParticipantList}
          edit={ParticipantEdit}
          create={ParticipantCreate}
          show={ParticipantShow}
        />
        <Resource
          name="ShareRecord"
          list={ShareRecordList}
          edit={ShareRecordEdit}
          create={ShareRecordCreate}
          show={ShareRecordShow}
        />
        <Resource
          name="Sharer"
          list={SharerList}
          edit={SharerEdit}
          create={SharerCreate}
          show={SharerShow}
        />
        <Resource
          name="Organizer"
          list={OrganizerList}
          edit={OrganizerEdit}
          create={OrganizerCreate}
          show={OrganizerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
