import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { logo } from "../../assets/exports";
import { sideDrawer } from "../common/constants";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color="lightMode.color" bgColor="lightMode.mainBg">
          <DrawerCloseButton />

          <DrawerBody p={0}>
            {" "}
            <Box
              h={"100vh"}
              w="100%"
              overflowY="hidden"
              transition="0.3s all ease-in-out"
            >
              <Flex
                flexDirection="column"
                mt="30px"
                align="center"
                borderBottom="2px"
                borderColor="#000"
                pb="15px"
              >
                <Image src={logo} w="10rem" />
              </Flex>

              <Flex flexDir={"column"} pb="15px" lineHeight="2.5em">
                {sideDrawer.map((item, i) => (
                  <Text key={i} textAlign={"center"} my={4}>
                    {item.name}
                  </Text>
                ))}
                <Button mx="3" variant="secondary">
                  Download App
                </Button>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
