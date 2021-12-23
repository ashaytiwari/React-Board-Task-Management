import React, { useState } from "react";
import styles from "./BoardPage.module.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CategoryColumn from "../../components/CategoryColumn/CategoryColumn";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addUpdateBoardData } from "../../redux/actions/board.action";
import Header from "../../components/Header/Header";

const BoardPage = () => {
  const dataSet = useSelector((state) => state.board.dataSet);
  const dispatch = useDispatch();

  const [data, setData] = useState(dataSet);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    //If there is no destination
    if (!destination) {
      return;
    }

    //If source and destination is the same
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //If you're dragging columns
    if (type === "column") {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...data,
        columnOrder: newColumnOrder
      };
      dispatch(addUpdateBoardData(newState));
      setData(newState);
      return;
    }

    //Anything below this happens if you're dragging tasks
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //If dropped inside the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      };
      dispatch(addUpdateBoardData(newState));
      setData(newState);
      return;
    }

    //If dropped in a different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    dispatch(addUpdateBoardData(newState));
    setData(newState);
  };

  return (
    <div className={styles.boardWrapper}>
      <Header />
      <div className={styles.body}>
        <div className={styles.bodyWrapper}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Grid container>
                    {data.columnOrder.map((id, index) => {
                      const column = data.columns[id];
                      const tasks = column.taskIds.map(
                        (taskId) => data.tasks[taskId]
                      );

                      return (
                        <CategoryColumn
                          key={column.id}
                          column={column}
                          tasks={tasks}
                          index={index}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </Grid>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
