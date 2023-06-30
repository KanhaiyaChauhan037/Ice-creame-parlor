import React, { useEffect } from "react";
import Navbar from "./Navbar";
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
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteice, fetchice } from "../Redux/Action";
import EditModal from "./EditModal";

const FetchIcecream = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const data = useSelector((state) => state.data);
  // console.log(data);
  useEffect(() => {
    dispatch(fetchice());
  }, [dispatch]);

  const handledelete = (id) => {
    dispatch(deleteice(id));
    toast({
      title: "Ice Cream Deleted Successfully!",
      position: "top",
      variant: "top-accent",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />

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
                      <Flex
                        w={"100px"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <EditModal id={el.id} />
                        <Text
                          cursor={"pointer"}
                          onClick={() => handledelete(el.id)}
                        >
                          <DeleteIcon />
                        </Text>
                      </Flex>
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

export default FetchIcecream;
