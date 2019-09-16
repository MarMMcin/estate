import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const Rooms = () => (
  <AppContext.Consumer>
    {context => <List items={context.rooms} />}
  </AppContext.Consumer>
);

export default Rooms;
