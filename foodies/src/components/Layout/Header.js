import {
  Box,
  Flex,
  HStack,
  Button,
  useMediaQuery,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { logo } from "../../assets/exports";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  const toggleSidebar = () => {
    setShowDrawerMenu(true);
  };

  return (
    <Box
      zIndex="5"
      h={isMobile ? "8vh" : "9vh"}
      pr={!isMobile ? "50px" : "20px"}
      pl={!isMobile ? "100px" : "0"}
      w="100%"
    >
      <SideDrawer
        isOpen={showDrawerMenu}
        onClose={() => setShowDrawerMenu(false)}
      />
      {!isMobile ? (
        <Flex py="8" w="full" align="center" justify="space-between">
          <Image src={logo} w="30" />
          <HStack justify="center" gap="2rem" mr={2}>
            <Text>Reviews</Text>
            <Text>Contact</Text>
            <Text>About</Text>
            <Button variant="secondary">Download App</Button>
          </HStack>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" align="center" m="3">
          <Image src={logo} w="30" />
          <MdMenu
            color="mainBg"
            size={32}
            cursor="pointer"
            onClick={toggleSidebar}
          />
        </Flex>
      )}
    </Box>
  );
};

export default Header;
