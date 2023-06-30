import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <Box>
      <Flex>
        <Link to="/user">All ice-Creame</Link>
        <Link to="/cart">Cart</Link>
      </Flex>
    </Box>
  );
}

export default UserNav