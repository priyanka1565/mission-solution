import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
export default function Filter({ HandelClick }) {
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} border={"2px solid teal"}>
        Apply Filters
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={"90%"}>
          <ModalHeader>Apply Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(e) => setprice(e.target.value)}
              >
                <option value="599">599</option>
                <option value="699">699</option>
                <option value="799">799</option>
                <option value="899">899</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              border={"2px solid teal"}
              mr={3}
              onClick={() => HandelClick(category, price)}
            >
              Filter
            </Button>
            <Button
              onClick={onClose}
              colorScheme="red"
              border={"2px solid teal"}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
