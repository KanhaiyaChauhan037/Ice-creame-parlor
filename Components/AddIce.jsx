import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  useToast,
  Select,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addice } from "../Redux/Action";

const initd = {
  name: "",
  flavor: "",
  description: "",
  price: "",
  stock: "",
};

const AddIce = () => {
  const [data, setData] = useState(initd);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const { name, flavor, description, price, stock } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!name || !flavor || !description || !price || !stock) {
      toast({
        title: "Please fill in all required fields",
        position: "top",
        variant: "top-accent",
        status: "error",
      });
    } else {
      dispatch(addice(data));
      onClose();
      toast({
        title: "Ice Cream Added Successfully!",
        position: "top",
        variant: "top-accent",
        status: "success",
      });
      console.log(data);
    }
  };

  return (
    <Box>
      <Text onClick={onOpen}>Add</Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Ice Cream</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Ice Cream name"
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Flavor</FormLabel>
              <Select name="flavor" value={flavor} onChange={handleChange}>
                <option value=" ">Select Flavor</option>
                <option value="chocolate">Chocolate</option>
                <option value="vanilla">Vanilla</option>
                <option value="strawberry">Strawberry</option>
                <option value="mint">Mint</option>
              </Select>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Ice Cream description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Ice Cream Price"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Stock</FormLabel>
              <Input
                placeholder="Ice Cream Stock"
                name="stock"
                value={stock}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAdd}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddIce;
