import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { phone } from "../../../assets/exports";

const SeventhLayer = () => {
  return (
    <Box px={10} pt={10} borderRadius="20px" bg="#2F2F2F" my={20}>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justifyContent="space-between"
        align="center"
      >
        <Box w={["fit-content", "520px", "520px", "520px"]} p={5}>
          <Text
            fontWeight={400}
            color="#fff"
            fontSize="60px"
            lineHeight="60px"
            fontFamily="Kaftan Serif"
          >
            Get 10% Off using our App
          </Text>
          <Text color="gray" my={4} lineHeight="30px">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </Text>
          <Button size="lg">Download App</Button>
        </Box>
        <Box>
          <Image src={phone} w="33rem" h="85vh" borderTopRadius="20px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default SeventhLayer;
