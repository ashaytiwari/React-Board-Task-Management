import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/logo.png";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddUpdateTaskModal from "../AddUpdateTaskModal/AddUpdateTaskModal";

const Header = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const handleAddUpdateTaskModal = () => {
    setIsAddTaskModalOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.header}>
      <div className={styles.section}>
        <img src={Logo} alt={"logo"} />
        <h4>React Board</h4>
      </div>

      <Tooltip title="Add New Task">
        <IconButton
          className={styles.iconBtn}
          onClick={handleAddUpdateTaskModal}
        >
          <AddCircleOutlineIcon className={styles.menuIcon} />
        </IconButton>
      </Tooltip>
      {isAddTaskModalOpen && (
        <AddUpdateTaskModal
          open={isAddTaskModalOpen}
          onClose={handleAddUpdateTaskModal}
          width={"xs"}
          actionType={"add"}
        />
      )}
    </div>
  );
};

export default Header;
