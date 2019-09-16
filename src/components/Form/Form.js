import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  apartments: "apartments",
  rooms: "rooms",
  houses: "houses"
};

const descriptions = {
  apartments: "apartment",
  rooms: "room",
  houses: "house",
  nuberOfRoom: "roooms",
  price: "price"
};

class Form extends React.Component {
  state = {
    type: types.apartments,
    title: "",
    nuberOfRoom: "",
    image: "",
    description: "",
    price: ""
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => context.addItem(e, this.state)}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.apartments}
                  checked={type === types.apartments}
                  changeFn={() =>
                    this.handleRadioButtonChange(types.apartments)
                  }
                >
                  apartment
                </Radio>
                <Radio
                  id={types.rooms}
                  checked={type === types.rooms}
                  changeFn={() => this.handleRadioButtonChange(types.rooms)}
                >
                  room
                </Radio>
                <Radio
                  id={types.houses}
                  checked={type === types.houses}
                  changeFn={() => this.handleRadioButtonChange(types.houses)}
                >
                  house
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label="Title"
              />
              <Input
                type="number"
                min="0"
                onChange={this.handleInputChange}
                value={this.state.price}
                name="price"
                label="price"
              />
              {type !== types.rooms ? (
                <Input
                  type="number"
                  min="1"
                  onChange={this.handleInputChange}
                  value={this.state.nuberOfRoom}
                  name="nuberOfRoom"
                  label="Rooms"
                />
              ) : null}

              <Input
                onChange={this.handleInputChange}
                value={this.state.image}
                name="image"
                label="Image"
              />

              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />

              <Button>add new advertisment</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
