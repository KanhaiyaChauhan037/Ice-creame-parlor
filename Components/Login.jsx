import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { LoginReq } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const token = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogin = () => {
  
      if (token) {
        dispatch(LoginReq(email, password));
        alert("Login successful");
        navigate("/fetch");
       } else {
         alert("Email and password are wrong");
       }
    
    console.log(token)
   
  };

  return (
    <Box>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Reqress Email"
        />
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Reqress password"
        />
        <Button onClick={handlelogin} type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
