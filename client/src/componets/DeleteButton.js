/** @format */

// src/components/DeleteButton.js
import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ blogId, onDelete }) => {
  const handleDelete = () => {
    onDelete(blogId);
  };

  return (
    <IconButton onClick={handleDelete} color="secondary">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
