import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { location } from "../../../assets/exports";

const SixthLayer = () => {
  return (
    <Box my={20}>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent="space-between"
        align="center"
      >
        <Box>
          <Box position="relative">
            <Image
              src={location}
              w={["33rem", "28rem", "33rem", "33rem"]}
              h={["80vh", "70vh", "80vh", "80vh"]}
              borderRadius="20px"
            />
          </Box>
        </Box>
        <Box w={["fit-content", "580px", "580px", "580px"]}>
          <Text
            fontWeight={400}
            fontStyle="normal"
            fontSize="55px"
            lineHeight="60px"
            fontFamily="Kaftan Serif"
          >
            Our Locations in Lagos
          </Text>
          <Box my={10} borderRadius="20px">
            <Text color="gray" my={4} lineHeight="30px">
              Address 1: Somewhere in Lagos, area 1, street this <br />
              Address 2: Somewhat in Lagos, area 2, street that, <br />
              Address 3: Somewhere in Lagos, area 3, street this. <br />
              Address 4: Somewhere in Lagos, area 4, street this
            </Text>
            <Text color="gray" my={4}>
              We are all over lagos, available at your hood to serve you better.
              We wil always be at your service.
            </Text>
            <Button p={2} size="lg">
              Check Locations
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SixthLayer;
