import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./TaskCard.module.scss";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddUpdateTaskModal from "../AddUpdateTaskModal/AddUpdateTaskModal";

const TaskCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className={`${snapshot.isDragging && styles.activeCard} ${
            styles.taskCard
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={styles.cardHeader}>
            <h2>{props.task.content}</h2>
            <IconButton className={styles.editBtn} onClick={handleModalOpen}>
              <EditIcon fontSize="small" />
            </IconButton>
          </div>
          <p>{props.task.data}</p>
          {isModalOpen && (
            <AddUpdateTaskModal
              open={isModalOpen}
              onClose={handleModalOpen}
              width="xs"
              task={props.task}
              actionType={"edit"}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
