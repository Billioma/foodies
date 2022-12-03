import React from "react";
import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FooterGrid from "../../common/FooterGrid";

const Footer = () => {
  return (
    <Box my={20} color="gray">
      <Grid
        w={"100%"}
        my={5}
        gap={["3rem", "3rem", "3rem", "25rem"]}
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        marginBottom="20px"
      >
        <FooterGrid title="Social Media">
          <Flex my={3} gap=".7rem" align="center">
            <Box bg="#BABABA" rounded="full" p={3}></Box>
            <Box bg="#BABABA" rounded="full" p={3}></Box>
            <Box bg="#BABABA" rounded="full" p={3}></Box>
            <Box bg="#BABABA" rounded="full" p={3}></Box>
          </Flex>
        </FooterGrid>

        <FooterGrid title="Quick Links">
          <Flex flexDir="column" lineHeight="2em">
            <Link to="/">About Us</Link>
            <Link to="/">Privacy Policies</Link>
            <Link to="/">Terms and Conditions</Link>
          </Flex>
        </FooterGrid>

        <FooterGrid title="Get App">
          <Flex flexDir="column" lineHeight="2em">
            <Link to="/">Download Android</Link>
            <Link to="/">Download iOS</Link>
          </Flex>
        </FooterGrid>
      </Grid>
      <Center fontSize="15px" my={20}>
        (c) foodies eatery 2022
      </Center>
    </Box>
  );
};

export default Footer;
