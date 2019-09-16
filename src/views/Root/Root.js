import React from "react";
import "./index.css";
import AppContext from "../../context";
import { HashRouter, Route, Switch } from "react-router-dom";
import Apartments from "../Apartments/Apartments";
import Rooms from "../Rooms/Rooms";
import Houses from "../Houses/Houses";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  state = {
    apartments: [],
    rooms: [],
    houses: [],
    isModalOpen: false
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    };

    return (
      <HashRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={Apartments} />
            <Route path="/articles" component={Rooms} />
            <Route path="/notes" component={Houses} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </HashRouter>
    );
  }
}

export default Root;

// 3. Dopasować Form.js do nowych potrzeb
// 4. Przystosować widoki podstron do nowych itemów
// 5. Wyświetlać odpowiednie notatki na podstronach
