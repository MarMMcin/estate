import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

import Title from "../Title/Title";

const ListItem = ({ image, title, description, nuberOfRoom, price }) => {
  const ImageTag = image ? "img" : "div";
  const Room = () => {
    if (nuberOfRoom !== "") return <p>rooms: {nuberOfRoom} </p>;
    else return "";
  };
  return (
    <li className={styles.wrapper}>
      {image && (
        <ImageTag
          src={image}
          className={image ? styles.image : styles.imageNone}
          alt={title}
          onError={e => {
            e.target.src = "https://unsplash.it/300/300";
          }}
        />
      )}
      <div>
        <Title>{title}</Title>
        <p>
          <Room />
        </p>
        <p>price: {price} PLN</p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nuberOfRoom: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

ListItem.defaultProps = {
  image: null,
  link: null
};

export default ListItem;
