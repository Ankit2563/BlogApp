import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import config from "../config";

const Login = () => {
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "login") => {
    console.log("inside send req");
    console.log(`${config.BASE_URL}/api/users/${type}`);
    const res = await axios
      .post(`${config.BASE_URL}/api/users/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log("return");
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;





// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store";
// import { useNavigate } from "react-router-dom";
// import config from "../config";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isSignup, setIsSignup] = useState(false);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendRequest = async (type = "login") => {
//     try {
//       const res = await axios.post(`${config.BASE_URL}/api/users/${type}`, {
//         name: inputs.name,
//         email: inputs.email,
//         password: inputs.password,
//       });
//       const data = res.data;
//       return data;
//     } catch (err) {
//       console.error("Error:", err);
//       throw err; // Rethrow error for handling
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       sendRequest("signup")
//         .then((data) => {
//           localStorage.setItem("userId", data.user._id);
//           dispatch(authActions.login());
//           navigate("/blogs");
//         })
//         .catch((error) => console.error("Signup error:", error));
//     } else {
//       sendRequest()
//         .then((data) => {
//           localStorage.setItem("userId", data.user._id);
//           dispatch(authActions.login());
//           navigate("/blogs");
//         })
//         .catch((error) => console.error("Login error:", error));
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           maxWidth={400}
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={10}>
//           <Typography variant="h4" textAlign="center" mb={3} color="primary">
//             {isSignup ? "Signup" : "Login"}
//           </Typography>
//           {isSignup && (
//             <TextField
//               name="name"
//               onChange={handleChange}
//               value={inputs.name}
//               placeholder="Name"
//               margin="normal"
//               variant="outlined"
//               fullWidth
//               mb={2}
//             />
//           )}
//           <TextField
//             name="email"
//             onChange={handleChange}
//             value={inputs.email}
//             type="email"
//             placeholder="Email"
//             margin="normal"
//             variant="outlined"
//             fullWidth
//             mb={2}
//           />
//           <TextField
//             name="password"
//             onChange={handleChange}
//             value={inputs.password}
//             type="password"
//             placeholder="Password"
//             margin="normal"
//             variant="outlined"
//             fullWidth
//             mb={3}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ borderRadius: 3, mt: 3, py: 2 }}>
//             Submit
//           </Button>
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             variant="outlined"
//             color="primary"
//             fullWidth
//             sx={{ borderRadius: 3, mt: 2, py: 2 }}>
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Login;

