// import React from "react";
// import axios from "axios";
// import config from "../config";

// const DeleteButton = ({ blogId, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       // Send a delete request to your backend
//       await axios.delete(`${config.BASE_URL}/api/blogs/${blogId}`);
//       // Call the onDelete callback to update the UI
//       onDelete();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   return <button onClick={handleDelete}>Delete</button>;
// };

// export default DeleteButton;



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

