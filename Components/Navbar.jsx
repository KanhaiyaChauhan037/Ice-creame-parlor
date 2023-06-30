import React from 'react'
import { Box,Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import AddIce from './AddIce';

const Navbar = () => {
  return (
    <Flex>
      
      <Link to="/fetch">All Ice cream</Link>
     <AddIce/>
    </Flex>
  );
}

export default Navbar