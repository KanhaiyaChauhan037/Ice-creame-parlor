import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { editice } from "../Redux/Action";
const initd = {
  name: "",
  flavor: "",
  description: "",
  price: "",
  stock: "",
};
const EditModal = ({ id }) => {
  const [data, setData] = useState(initd);
  const dispatch = useDispatch();
  const edata = useSelector((state) => state.data);
  // console.log("edit", edata);
  const toast = useToast();

  useEffect(() => {
    const contact = edata.find((contact) => contact.id === id);
    if (contact) {
      setData({ ...contact });
    }
  }, [edata, id]);

  const { name, flavor, description, price, stock } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleEdit = () => {
    if (!name || !flavor || !description || !price || !stock) {
      toast({
        title: "Please fill in all required fields",
        position: "top",
        variant: "top-accent",
        status: "error",
      });
    } else {
      dispatch(editice(id, data));
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
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        <EditIcon />
      </Text>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Contact</ModalHeader>
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
                <option value=" ">select flavor</option>
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
            <Button colorScheme="blue" mr={3} onClick={handleEdit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
