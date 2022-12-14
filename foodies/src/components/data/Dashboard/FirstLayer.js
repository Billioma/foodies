import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  avatar1,
  avatar2,
  avatar3,
  menu,
  order,
} from "../../../assets/exports";

const FirstLayer = () => {
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent="space-between"
        align="center"
      >
        <Box w={["fit-content", "470px", "470px", "470px"]}>
          <Text
            fontWeight={400}
            fontStyle="normal"
            fontSize="86px"
            lineHeight="90px"
            fontFamily="Kaftan Serif"
          >
            Authentic Food Dishes
          </Text>
          <Text my={4} lineHeight="30px">
            We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget
          </Text>
          <Button my={7} size="lg">
            Place Order
          </Button>

          <Box
            my={20}
            w={["100%", "80%", "80%", "80%"]}
            boxShadow="lg"
            p={2}
            borderRadius="10px"
          >
            <Flex align="center" gap="2rem">
              <HStack align="center" gap="1rem">
                <Image src={avatar1} />
                <Image src={avatar2} />
                <Image src={avatar3} />
                <Divider orientation="vertical" bg="gray" h="5vh" w=".1rem" />
              </HStack>
              <Flex flexDir="column" align="center">
                <Text fontSize="11px">Happy Customers</Text>
                <Heading fontSize="19px">3.5k</Heading>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box position="relative">
            <Image
              src={menu}
              pos="absolute"
              ml={["-3rem", "-3rem", "-5rem", "-5rem"]}
              w={["5rem", "5rem", "7rem", "7rem"]}
              mt={["20rem", "25rem", "25rem", "25rem"]}
            />
            <Image
              src={order}
              w={["20rem", "27rem", "33rem", "33rem"]}
              h={["65vh", "70vh", "80vh", "80vh"]}
              borderRadius="20px"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FirstLayer;
