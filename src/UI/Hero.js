import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import TenantlyMobile from "../Assets/img/TENANTLYMOBILE.png";
import bgSplash from "../Assets/img/colorbg.png";
import TypingTextRotator from "../Utils/Typer";
import { keyframes } from "@emotion/react"; // ✅ Correct import

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;
function Hero() {
  const bounceAnimation = `${bounce} 4s ease-in-out infinite`;

  return (
    <Box
      height={["130vh"]}
      backgroundImage={`url(${bgSplash})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        textAlign="center"
        backgroundColor="BgColor.50"
        width={["230px", "300px", "300px"]}
        mx="auto"
        mt="80px"
        borderRadius="50px"
        border="1px solid #141441"
        mb={8}
      >
        <Text fontSize={["12px", "14px", "14px"]} p={2}>
          Finding shelter shouldn't be a hassle!
        </Text>
      </Box>

      <Heading
        pb="130px"
        color="TextColor.600"
        textAlign="center"
        fontSize={["2xl", "3xl", "5xl"]}
        fontWeight="semibold"
        height={["120px", "0px", "0px"]}
      >
        <TypingTextRotator
          texts={["Monthly", "Quarterly", "Annually"]}
          fontSize={["2xl", "3xl", "5xl"]}
          fontWeight="semibold"
          color="PrimaryColor.600"
          textAlign="center"
        />
        Rentals Made Simple
        <br />
        <Text as="span" color="TextColor.300">
          <em>- No Middlemen</em>
        </Text>
      </Heading>

      <Text
        textAlign="center"
        fontSize={["14px", "16px", "18px"]}
        color="TextColor.400"
        width={["250px", "100%", "100%"]}
        mx="auto"
      >
        Rent an apartment, share, or rent a space you own <br />
        and make extra cash at ease.
      </Text>

      <Box textAlign="center" my={8}>
        <Input
          placeholder="Enter your email"
          focusBorderColor="bgColor.100"
          width={["300px", "300px", "400px"]}
          p={[6, 8, 8]}
          mr={["0", "10px", "10px"]}
          backgroundColor="NeutralColor.0"
          mb={[4, 0, 0]}
        />
        <Button
          backgroundColor="PrimaryColor.500"
          color="NeutralColor.0"
          p={[6, 6, 8]}
          width={["300px", "150px", "150px"]}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("PrimaryColor.800", "NeutralColor.100"),
          }}
        >
          Join Waitlist
        </Button>
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        mt="72px"
        animation={bounceAnimation}
      >
        <img
          src={TenantlyMobile}
          alt="TenantlyMobile"
          width={["900px", "900px", "100%"]}
        />
      </Flex>
    </Box>
  );
}

export default Hero;
