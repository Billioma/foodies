import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { food } from "../../../assets/exports";

const ThirdLayer = () => {
  return (
    <Box
      my={20}
      background="linear-gradient(180deg, #FAFAFA 0%, rgba(249, 248, 248, 0) 79.13%)"
      p={20}
      boxShadow="sm"
      borderRadius="10px"
    >
      <Flex justifyContent="space-between">
        <Box w="470px">
          <Text
            fontWeight={400}
            fontStyle="normal"
            fontSize="56px"
            lineHeight="60px"
            fontFamily="Kaftan Serif"
          >
            People that feeds well loves our recipe
          </Text>
          <Text my={4} lineHeight="30px">
            We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget. We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget
          </Text>
        </Box>
        <Box>
          <Image src={food} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ThirdLayer;
