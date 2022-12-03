import React from "react";
import { GridItem, Heading } from "@chakra-ui/react";

const FooterGrid = ({ title, children }) => {
  return (
    <GridItem colSpan={[1, 1, 1, 1]} w="100%">
      <Heading color="#000" fontSize="15px">
        {title}
      </Heading>
      {children}
    </GridItem>
  );
};

export default FooterGrid;
