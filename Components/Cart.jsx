import React, { useEffect } from "react";
import UserNav from "./UserNav";
import {
  Box,
  Table,
  Td,
  Tr,
  TableCaption,
  Th,
  Tbody,
  Thead,
  TableContainer,
  useToast,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import { cartfetch,cartdelete } from "../Redux/Action";

const User = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const data = useSelector((state) => state.cart);
  // console.log(data);
  useEffect(() => {
    dispatch(cartfetch());
  }, [dispatch]);

  const handledelete = (id) => {
    dispatch(cartdelete(id));
    toast({
      title: "Add to cart Successfully!",
      position: "top",
      variant: "top-accent",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box>
      <UserNav />

      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>flavor</Th>
                <Th>description</Th>
                <Th>price</Th>
                <Th>stock</Th>

              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.id}</Td>
                  <Td>{el.name}</Td>
                  <Td>{el.flavor}</Td>
                  <Td>{el.description}</Td>
                  <Td>{el.price}</Td>
                  <Td>{el.stock}</Td>
                  <Td>
                    <Flex>
                      <Button mr="5px" onClick={() => handledelete(el.id)}>
                      Order
                      </Button>
                      <Button onClick={() => handledelete(el.id)}>
                        <DeleteIcon />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default User;
