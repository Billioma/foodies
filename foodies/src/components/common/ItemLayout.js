import React from "react";
import { Button, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const GridLayout = ({ img, type, price, active }) => {
  return (
    <GridItem colSpan={[3, 3, 1, 1]}>
      <Flex
        w="80%"
        flexDir="column"
        boxShadow="lg"
        borderRadius="20px"
        bg={active ? "#fff" : "#FAFAFA"}
        p={4}
      >
        <Image src={img} />
        <Heading my={5} fontSize="15px">
          {type} Rice
        </Heading>
        <Text>Rice with a touch of delicacies, inviting and satisfying</Text>
        <Flex my={5} justifyContent="space-between">
          <Heading fontSize="22px">{price}</Heading>
          <Button rounded="full" size="sm">
            <MdAdd />
          </Button>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default GridLayout;
