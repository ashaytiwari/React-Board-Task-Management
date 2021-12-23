import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./CategoryColumn.module.scss";
import TaskCard from "../TaskCard/TaskCard";
import { Grid } from "@mui/material";

const CategoryColumn = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Grid
          item
          xs={3}
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={styles.gridSection}
        >
          <div className={styles.container}>
            <div className={styles.header} {...provided.dragHandleProps}>
              <h4>{props.column.title}</h4>
            </div>
            <Droppable droppableId={props.column.id} type="task">
              {(provided, snapshot) => (
                <div
                  className={
                    snapshot.isDraggingOver
                      ? styles.draggingTaskList
                      : styles.taskList
                  }
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {props.tasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </Grid>
      )}
    </Draggable>
  );
};

export default CategoryColumn;
