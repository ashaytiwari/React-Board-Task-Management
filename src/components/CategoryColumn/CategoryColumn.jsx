import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./CategoryColumn.module.scss";
import TaskCard from "../TaskCard/TaskCard";

const CategoryColumn = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={styles.header} {...provided.dragHandleProps}>
            <h4>{props.column.title}</h4>
          </div>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <div
                className={styles.taskList}
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <TaskCard key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default CategoryColumn;
