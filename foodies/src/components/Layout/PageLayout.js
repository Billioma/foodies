import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./Header";

export const Layout = ({ children }) => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");

  return (
    <Box color="lightMode.color" bg="lightMode.mainBg" position="relative">
      <Box minH="100vh" overflowX="hidden">
        <Header data={isMobile} />
        <Box
          w={["100%", "100%", "100%", "100%"]}
          pt={130}
          minH="100vh"
          pl={!isMobile ? "100px" : "20px"}
          pr={!isMobile ? "50px" : "20px"}
          pb={10}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
