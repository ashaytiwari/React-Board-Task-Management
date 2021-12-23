import React, { useState, useEffect } from "react";
import { DialogTitle, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AddUpdateTaskModal.module.scss";
import InputField from "../UI/InputField/InputField";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { addUpdateBoardData } from "../../redux/actions/board.action";

const AddUpdateTaskModal = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dataSet = useSelector((state) => state.board.dataSet);

  useEffect(() => {
    if (props.actionType === "edit") {
      setTitle(props.task.content);
      setDescription(props.task.data);
    }
  }, []);

  const handleSubmitData = () => {
    const dummyData = { ...dataSet };
    if (props.actionType === "edit") {
      const newObject = {
        id: props.task.id,
        content: title,
        data: description
      };
      dummyData.tasks[props.task.id] = newObject;
      dispatch(addUpdateBoardData(dummyData));
      props.onClose();
      alert("Data updated successfully");
    } else {
      const newTaskId = Object.keys(dummyData.tasks).length + 1;
      const newObject = {
        id: `task-${newTaskId}`,
        content: title,
        data: description
      };
      dummyData.tasks[`task-${newTaskId}`] = newObject;
      dummyData.columns["column-1"].taskIds.push(`task-${newTaskId}`);
      dispatch(addUpdateBoardData(dummyData));
      props.onClose();
      alert("Data added successfully");
    }
  };

  return (
    <Dialog
      open={props.open}
      fullWidth={true}
      maxWidth={props.width}
      onClose={props.onClose}
      className={styles.dialog}
    >
      <div className={styles.dialogTitle}>
        <h3>{props.actionType === "edit" ? "Edit Task" : "Add Task"} </h3>
        <IconButton className={styles.closeBtn} onClick={props.onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={styles.dialogBody}>
        <div className={styles.formGroup}>
          <label>Title*</label>
          <InputField
            name={"title"}
            id={"title"}
            type={"text"}
            placeholder={"Enter Title of your task"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Description*</label>
          <Textarea
            name={"title"}
            id={"title"}
            type={"text"}
            row={5}
            placeholder={"Enter Description of your task"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <Button onClick={handleSubmitData}>Submit</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddUpdateTaskModal;
