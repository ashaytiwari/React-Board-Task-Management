import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./TaskCard.module.scss";

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
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
