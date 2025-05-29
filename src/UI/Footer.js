import React from "react";
import { Box, Flex, Text, Stack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="NeutralColor.100" color="white" py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={6}
      >
        {/* Brand / Logo */}
        <Text fontWeight="bold" fontSize="lg">
          Tenanltly
        </Text>

        {/* Navigation Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          align="center"
          my={{ base: 4, md: 0 }}
        >
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          {/* <Link href="#" _hover={{ textDecoration: "underline" }}>
            About
          </Link>
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link> */}
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Privacy
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={4}>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} w={5} h={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} w={5} h={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} w={5} h={5} _hover={{ color: "gray.400" }} />
          </Link>
        </Stack>
      </Flex>

      <Divider borderColor="gray.700" my={6} />

      {/* Copyright */}
      <Text textAlign="center" fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} Tenanltly Nigeria 2025. All rights
        reserved.
      </Text>
    </Box>
  );
};

export default Footer;
