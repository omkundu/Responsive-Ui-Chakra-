import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {CloseIcon} from "@chakra-ui/icons"
import { useBoolean } from '@chakra-ui/react'
const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/conatct",
    label: "Contact",
  },
  {
    to: "/login",
    label: "Login",
  },
];

const Navbar = () => {
    const [flag,setFlag]=useBoolean(false)
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.to} as={ReactRouterLink} to={link.to}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </Flex>
        <IconButton
        onClick={setFlag.on}
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
        ></IconButton>
      </Box>
     {flag && ( <Box
        pos="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bgColor="white"
        zIndex={20}
        overflow="auto"
        display={{ base: "block", md: "none" }}
      >
        <Flex>
            <Box pos="fixed" top="1rem" right="1rem">
                <IconButton  icon={<CloseIcon/>}   onClick={setFlag.off}
></IconButton>
            </Box>
        </Flex>
        
          <Flex direction="column" align="center" marginTop="3rem">
            {links.map((link) => (
              <Link key={link.to} as={ReactRouterLink} to={link.to}>
                <Button variant="ghost">{link.label}</Button>
              </Link>
            ))}
          </Flex>
        
      </Box>)}
    </Box>
  );
};

export default Navbar;
