// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blogs from "./Blogs";
// import DeleteButton from "./DeleteBlogs";
// import { makeStyles } from "@mui/styles";
// import config from "../config";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "20px auto",
//     width: "80%",
//   },
//   blogContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   blogImage: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "10px",
//     marginBottom: "10px",
//   },
//   editButton: {
//     background: "#f0f0f0",
//     border: "none",
//     padding: "5px 10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginTop: "10px",
//     fontSize: "14px",
//   },
//   deleteButton: {
//     position: "absolute",
//     right: 10,
//     top: 10,
//     color: "red",
//     cursor: "pointer",
//   },
// }));

// const UserBlogs = () => {
//   const classes = useStyles();
//   const [user, setUser] = useState();
//   const id = localStorage.getItem("userId");

//   const sendRequest = async () => {
//     const res = await axios
//       .get(`http://localhost:5000/api/blogs/user/${id}`)
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };

//   useEffect(() => {
//     sendRequest().then((data) => setUser(data.user));
//   }, []);

//   const handleDelete = (blogId) => {
//     axios.delete(`${config.BASE_URL}/api/blogs/${blogId}`).then(() => {
//       sendRequest().then((data) => setUser(data.user));
//     });
//   };

//   return (
//     <div className={classes.container}>
//       {user &&
//         user.blogs &&
//         user.blogs.map((blog, index) => (
//           <div key={index} className={classes.blogContainer}>
//             <Blogs
//               id={blog._id}
//               isUser={true}
//               title={blog.title}
//               description={blog.description}
//               imageURL={blog.image}
//               userName={user.name}
//             />
//             <img
//               className={classes.blogImage}
//               src={blog.image}
//               alt={blog.title}
//             />
//             <DeleteButton blogId={blog._id} onDelete={handleDelete} />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default UserBlogs;
// src/components/UserBlogs.js


// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import Blog from "./Blog";
// import DeleteButton from "./DeleteButton";
// import { makeStyles } from "@mui/styles";
// import config from "../config";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "20px auto",
//     width: "80%",
//   },
//   blogContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: '1000px',
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//   },
//   blogImage: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "10px",
//     marginBottom: "10px",
//   },
// }));

// const UserBlogs = () => {
//   const classes = useStyles();
//   const [user, setUser] = useState(null);
//   const id = localStorage.getItem("userId");

//   const sendRequest = useCallback(async () => {
//     const res = await axios
//       .get(`${config.BASE_URL}/api/blogs/user/${id}`)
//       .catch((err) => console.log(err));
//     const data = await res?.data;
//     return data;
//   }, [id]);

//   useEffect(() => {
//     sendRequest().then((data) => setUser(data.user));
//   }, [sendRequest]);

//   const handleDelete = (blogId) => {
//     axios.delete(`${config.BASE_URL}/api/blogs/${blogId}`).then(() => {
//       sendRequest().then((data) => setUser(data.user));
//     });
//   };

//   return (
//     <div className={classes.container}>
//       {user && user.blogs && user.blogs.map((blog, index) => (
//         <div key={index} className={classes.blogContainer}>
//           <Blog
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             description={blog.description}
//             imageURL={blog.image}
//             userName={user.name}
//           />
//           <DeleteButton blogId={blog._id} onDelete={handleDelete} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserBlogs;



// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import Blog from "./Blog";
// import DeleteButton from "./DeleteButton";
// import { makeStyles } from "@mui/styles";
// import config from "../config";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "20px auto",
//     width: "80%",
//   },
//   blogContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: "1000px",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//   },
//   blogImage: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "10px",
//     marginBottom: "10px",
//   },
// }));

// const UserBlogs = () => {
//   const classes = useStyles();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const id = localStorage.getItem("userId");

//   const sendRequest = useCallback(async () => {
//     try {
//       const res = await axios.get(`${config.BASE_URL}/api/blogs/user/${id}`);
//       const data = await res.data;
//       return data;
//     } catch (err) {
//       console.error(err);
//       setError(err);
//     }
//   }, [id]);

//   useEffect(() => {
//     sendRequest().then((data) => {
//       if (data) {
//         setUser(data.user);
//       }
//     });
//   }, [sendRequest]);

//   const handleDelete = (blogId) => {
//     axios
//       .delete(`${config.BASE_URL}/api/blogs/${blogId}`)
//       .then(() => {
//         sendRequest().then((data) => {
//           if (data) {
//             setUser(data.user);
//           }
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err);
//       });
//   };

//   if (error) {
//     return <div>Error loading blogs: {error.message}</div>;
//   }

//   return (
//     <div className={classes.container}>
//       {user &&
//         user.blogs &&
//         user.blogs.map((blog, index) => (
//           <div key={index} className={classes.blogContainer}>
//             <Blog
//               id={blog._id}
//               isUser={true}
//               title={blog.title}
//               description={blog.description}
//               imageURL={blog.image}
//               userName={user.name}
//             />
//             <DeleteButton blogId={blog._id} onDelete={handleDelete} />
//           </div>
//         ))}
//       {!user && <div>Loading...</div>}
//     </div>
//   );
// };

// export default UserBlogs;
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Blog from "./Blog";
import DeleteButton from "./DeleteButton";
import { makeStyles } from "@mui/styles";
import config from "../config";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    width: "80%",
  },
  blogContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "1000px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
}));

const UserBlogs = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("userId");

  const sendRequest = useCallback(async () => {
    try {
      const res = await axios.get(`${config.BASE_URL}/api/blogs/user/${id}`);
      const data = await res.data;
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }, [id]);

  useEffect(() => {
    sendRequest().then((data) => {
      if (data) {
        setUser(data.user);
      }
    });
  }, [sendRequest]);

  const handleDelete = (blogId) => {
    axios.delete(`${config.BASE_URL}/api/blogs/${blogId}`).then(() => {
      sendRequest().then((data) => {
        if (data) {
          setUser(data.user);
        }
      });
    });
  };

  return (
    <div className={classes.container}>
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <div key={index} className={classes.blogContainer}>
            <Blog
              id={blog._id}
              isUser={true}
              title={blog.title}
              desc={blog.desc} // Ensure this prop name matches the Blog component
              img={blog.img} // Ensure this prop name matches the Blog component
              user={user.name}
            />
            <DeleteButton blogId={blog._id} onDelete={handleDelete} />
          </div>
        ))}
    </div>
  );
};

export default UserBlogs;
