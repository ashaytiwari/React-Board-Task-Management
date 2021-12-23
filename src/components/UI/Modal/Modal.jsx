import React from "react";
import { DialogTitle, Dialog } from "@mui/material";

const Modal = (props) => {
  return (
    <Dialog open={props.open} maxWidth={props.width}>
      <DialogTitle>Edit Task</DialogTitle>
      <div>
        <h4>Hare Krishna</h4>
      </div>
    </Dialog>
  );
};

export default Modal;
