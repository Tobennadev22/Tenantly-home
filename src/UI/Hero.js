import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";
import TenantlyMobile from "../Assets/img/TENANTLYMOBILE.png";
function Hero() {
  return (
    <Container maxW="container.xl">
      <Box>
        <Heading
          color="TextColor.600"
          textAlign={["center"]}
          fontSize="4xl"
          fontWeight={["medium", "medium", "semibold"]}
        >
          Guaranteed Comfort,<br></br> Shelter for all Classes
        </Heading>
        <Text textAlign={["center"]} fontSize="18px">
          Rent an apartment, share, or rent a space you own and make extra cash
          at ease.
        </Text>
        <Input
          placeholder="Enter your email"
          focusBorderColor="bgColor.100"
        ></Input>
        <Button backgroundColor="PrimaryColor.500" color="NeutralColor.0">
          {" "}
          Join Waitlist
        </Button>
        <Flex justifyContent="center" alignItem="center">
          <img src={TenantlyMobile} alt="TenantlyMobile" width={["400px"]} />
        </Flex>
      </Box>
    </Container>
  );
}

export default Hero;
