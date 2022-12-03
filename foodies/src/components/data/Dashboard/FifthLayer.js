import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { recommend, recommendAv } from "../../../assets/exports";

const FifthLayer = () => {
  return (
    <Box my={20}>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent="space-between"
        align="center"
      >
        <Box w={["fit-content", "580px", "580px", "580px"]}>
          <Text color="gray" fontSize="12px">
            Satisfied Customer Review
          </Text>
          <Text
            fontWeight={400}
            fontStyle="normal"
            fontSize="65px"
            lineHeight="60px"
            fontFamily="Kaftan Serif"
          >
            Look what they recommended for you
          </Text>
          <Box
            my={20}
            bg="#F5F5F5"
            p={7}
            borderRadius="20px"
            position="relative"
          >
            <Image
              src={recommendAv}
              rounded="full"
              pos="absolute"
              w="4rem"
              mt="-3rem"
            />
            <Text color="gray" my={4} lineHeight="30px">
              The best, top rated.The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated
            </Text>
          </Box>
        </Box>
        <Box>
          <Box position="relative">
            <Image
              src={recommend}
              w={["33rem", "28rem", "33rem", "33rem"]}
              h={["80vh", "70vh", "80vh", "80vh"]}
              borderRadius="20px"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FifthLayer;
