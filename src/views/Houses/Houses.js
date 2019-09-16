import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const Houses = () => (
  <AppContext.Consumer>
    {context => <List items={context.houses} />}
  </AppContext.Consumer>
);

export default Houses;
