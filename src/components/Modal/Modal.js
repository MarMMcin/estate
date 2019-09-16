import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn}>
      <div className="x">X</div>
    </button>
    <Form />
  </div>
);

export default Modal;
