import React from "react";
import { Box, Divider, Flex, GridItem, Heading, Text } from "@chakra-ui/react";

const GridLayout = ({ title }) => {
  return (
    <GridItem colSpan={[3, 3, 3, 1]} w="80%">
      <Flex gap=".4rem" align="center">
        <Box bg="gray" rounded="full" p={5}></Box>
        <Divider orientation="vertical" bg="gray" h="5vh" w=".3rem" />
      </Flex>
      <Heading my={4} fontSize="20px">
        {title}
      </Heading>
      <Text fontSize="15px" color="gray">
        We serve you the best meal, we have the responsibilities caring for your
        health which is why making healthy is our priority. We serve you the
        best meal, we have
      </Text>
    </GridItem>
  );
};

export default GridLayout;
