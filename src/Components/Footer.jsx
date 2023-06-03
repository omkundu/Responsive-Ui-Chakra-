import { Button, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const dummyLinks = new Array(12).fill(0).map((_, i) => `Link ${i+1}`);
  return (
    <VStack py={10} bg="gray.200" mt={4}>
      <Flex align="center" justify="center">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="4rem">
          {dummyLinks.map((el) => (
            <Link>
            <Button variant="ghost">{el}</Button></Link>
          ))}
        </SimpleGrid>
      </Flex>
      <HStack>
        <Text>&copy; {new Date().getFullYear()} Om Coffee Shop</Text>
        <Text>|</Text>
        <Text>All right reserved</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
