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
      <Button onClick={onOpen}>Add Filters</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={"90%"}>
          <ModalHeader>Make Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="DESIGN OF THE DAY">DESIGN OF THE DAY</option>
                <option value="OVERSIZED FIT">OVERSIZED FIT</option>
                <option value="SUPER LOOSE FIT">SUPER LOOSE FIT</option>
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
              colorScheme="blue"
              mr={3}
              onClick={() => HandelClick(category, price)}
            >
              Filter
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
