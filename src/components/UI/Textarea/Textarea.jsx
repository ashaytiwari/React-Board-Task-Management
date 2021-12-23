import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = (props) => {
  return (
    <textarea
      className={styles.textarea}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      id={props.id}
      autoComplete={false}
      type={props.type}
      rows={props.row}
      placeholder={props.placeholder}
    />
  );
};

export default Textarea;
