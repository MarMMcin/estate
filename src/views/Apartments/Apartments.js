import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const Apartments = () => (
  <AppContext.Consumer>
    {context => <List items={context.apartments} />}
  </AppContext.Consumer>
);

export default Apartments;
