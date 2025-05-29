import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
// import { Link as ScrollLink } from "react-scroll";
import Logo from "../Assets/img/logo.png";

import {
  Box,
  Container,
  Flex,
  Link,
  useDisclosure,
  Stack,
  IconButton,
  HStack,
  useColorModeValue,
  CloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    fontSize={["14px"]}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("TextColor.50", "gray.500"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      // bg={useColorModeValue("black.900")}
      // px={20}
      backgroundColor="BgColor.0"
      position="sticky"
      borderBottom="1px solid #ddd"
      top="0px"
      zIndex="1000"
      p={2}
      px={10}
      //   boxShadow="md"
      blur={10}
      opacity={[0.9]}
      //   width={["1140px"]}
      //   borderRadius={["50px"]}
      mx="auto"
    >
      <Container maxW={["container.sm", "container.lg"]}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color="gray.600"
        >
          <IconButton
            // px={10}
            size={"sm"}
            icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex direction={["column", "column", "row"]}>
            <ChakraLink as={ReactRouterLink} to="/" textDecoration="none">
              {/* <Text fontWeight={[700]}>Tenantly</Text> */}
              <img src={Logo} alt="TenantlyLogo" width="120px" />
            </ChakraLink>
          </Flex>
          <HStack spacing={8} alignItems={"center"} justifyContent={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", sm: "flex" }}
              fontWeight={[500]}
            >
              <ChakraLink
                as={ReactRouterLink}
                fontSize={["14px"]}
                to="/"
                _activeLink={{
                  // bg: "PrimaryColor.400",
                  color: "TextColor.800",
                  fontWeight: "small",
                }}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("BgColor.100", "TextColor.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                Home
              </ChakraLink>
              {/* <ChakraLink
                as={ReactRouterLink}
                fontSize={["14px"]}
                to="/about"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("BgColor.100", "TextColor.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                About
              </ChakraLink> */}
              {/* <ChakraLink
                as={ScrollLink}
                fontSize={["14px"]}
                to="#"
                smooth="true"
                duration={800}
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("BgColor.100", "TextColor.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                Features
              </ChakraLink> */}
              <NavLink>Contact</NavLink>
              <Button
                backgroundColor="PrimaryColor.500"
                color="#ffffff"
                fontWeight={[400]}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("PrimaryColor.800", "NeutralColor.100"),
                }}
              >
                Join Waitlist
              </Button>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ChakraLink
                as={ReactRouterLink}
                fontSize="14px"
                to="/"
                px={2}
                py={1}
                rounded={"md"}
              >
                Home
              </ChakraLink>
              {/* <ChakraLink
                as={ReactRouterLink}
                to="/about"
                px={2}
                py={1}
                rounded={"md"}
              >
                About
              </ChakraLink> */}
              {/* <ChakraLink
                as={ScrollLink}
                to="project-section"
                smooth="true"
                duration={500}
                cursor="pointer"
                px={2}
                py={1}
                rounded={"md"}
              >
                Features
              </ChakraLink> */}
              <NavLink>Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
