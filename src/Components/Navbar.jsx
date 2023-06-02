import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons"
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
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link as={ReactRouterLink} to={link.to}>
              <Button variant="ghost">{link.label}</Button>

            </Link>
          ))}
        </Flex>
        <IconButton icon={<HamburgerIcon/>}></IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
