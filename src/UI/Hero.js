import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Flex,
  // useColorModeValue,
} from "@chakra-ui/react";
import TenantlyMobile from "../Assets/img/TENANTLYMOBILE.png";
// import bgSplash from "../Assets/img/colorbg.png";
// import bgnet from "../Assets/img/bgnet.png";
import TypingTextRotator from "../Utils/Typer";
import { keyframes } from "@emotion/react"; // ✅ Correct import
// import star from "../Assets/img/star.jpg";
// import Tenant1 from "../Assets/img/Frame 34.png";
// import Tenant2 from "../Assets/img/Frame 35.png";

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
      // height={["130vh"]}
      // backgroundImage={`url(${bgnet})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pt={["40px", "80px", "80px"]}
      backgroundColor="#ffffff"
      // backgroundColor="#f9f9f9"
      position="relative"
    >
      <Box>
        {/* <Box
          position="absolute"
          top="200px"
          left="200px"
          bg="#8409e4"
          color="white"
          p="2"
          borderRadius="lg"
          animation={bounceAnimation}
        >
          <img
            src={Tenant1}
            alt="A tenant on tenantly"
            display={["none", "block", "block"]}
            width={["24px", "48px", "70px"]}
          />
        </Box> */}

        {/* <Box
          position="absolute"
          top="400px"
          right="200px"
          bg="#5063f6"
          color="white"
          p="2"
          borderRadius="lg"
          animation={bounceAnimation}
        >
          <img
            src={Tenant2}
            alt="A tenant on tenantly"
            width={["none", "48px", "70px"]}
          />
        </Box> */}
        <Box
          textAlign="center"
          backgroundColor="SecondaryColor.100"
          width={["230px", "300px", "300px"]}
          mx="auto"
          // mt="80px"
          borderRadius="50px"
          border="1px solid #141441"
          mb={8}
        >
          {/* <img src={star} as="span" alt="star" width={["24px"]} /> */}
          <Text fontSize={["12px", "14px", "14px"]} p={2}>
            Finding shelter shouldn't be a hassle!
          </Text>
        </Box>

        <Heading
          pb={["140px", "160px", "140px"]}
          color=" #122231"
          // color="TextColor.600"
          textAlign="center"
          fontSize={["32px", "48px", "54px"]}
          fontWeight="semibold"
          height={["120px", "0px", "0px"]}
        >
          <TypingTextRotator
            texts={["Monthly", "Quarterly", "Annually"]}
            fontSize={["32px", "48px", "54px"]}
            fontWeight="bold"
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
              // bg: useColorModeValue("PrimaryColor.800", "NeutralColor.100"),
              borderRadius: "50px",
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Box>
      <Box>
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
    </Box>
  );
}

export default Hero;
