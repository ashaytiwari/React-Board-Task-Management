import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      id={props.id}
      autoComplete={"off"}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
