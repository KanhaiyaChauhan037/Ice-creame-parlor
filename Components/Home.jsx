import { Box } from '@chakra-ui/react'
import React from 'react'
import Admin from "./Admin";
import User from "./User";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Box>
      <Link to="/admin">Admin</Link>
      <Link to="/user">User</Link>
    </Box>
  );
}

export default Home