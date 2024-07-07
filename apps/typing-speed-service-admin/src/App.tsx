import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TypingTestList } from "./typingTest/TypingTestList";
import { TypingTestCreate } from "./typingTest/TypingTestCreate";
import { TypingTestEdit } from "./typingTest/TypingTestEdit";
import { TypingTestShow } from "./typingTest/TypingTestShow";
import { TypingResultList } from "./typingResult/TypingResultList";
import { TypingResultCreate } from "./typingResult/TypingResultCreate";
import { TypingResultEdit } from "./typingResult/TypingResultEdit";
import { TypingResultShow } from "./typingResult/TypingResultShow";
import { TypingErrorList } from "./typingError/TypingErrorList";
import { TypingErrorCreate } from "./typingError/TypingErrorCreate";
import { TypingErrorEdit } from "./typingError/TypingErrorEdit";
import { TypingErrorShow } from "./typingError/TypingErrorShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"TypingSpeedServiceTest"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TypingTest"
          list={TypingTestList}
          edit={TypingTestEdit}
          create={TypingTestCreate}
          show={TypingTestShow}
        />
        <Resource
          name="TypingResult"
          list={TypingResultList}
          edit={TypingResultEdit}
          create={TypingResultCreate}
          show={TypingResultShow}
        />
        <Resource
          name="TypingError"
          list={TypingErrorList}
          edit={TypingErrorEdit}
          create={TypingErrorCreate}
          show={TypingErrorShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
