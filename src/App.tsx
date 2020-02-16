import React from "react";
import { Provider } from "react-redux";
import configureStore from "./state";
import UsersList from "./components/UsersList";

const App = (): React.ReactElement => {
  const store = configureStore({ users: { data: [], loading: false } });

  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
