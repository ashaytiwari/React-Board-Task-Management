import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./TaskCard.module.scss";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../UI/Modal/Modal";

const TaskCard = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className={styles.taskCard}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className={styles.cardHeader}>
            <h2>{props.task.content}</h2>
            <IconButton className={styles.editBtn}>
              <EditIcon fontSize="small" />
            </IconButton>
          </div>
          <p>{props.task.data}</p>
          <Modal />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
