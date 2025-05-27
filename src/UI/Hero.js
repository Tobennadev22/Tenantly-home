import React from "react";
import { Box, Heading, Text, Button, Input, Flex } from "@chakra-ui/react";
import TenantlyMobile from "../Assets/img/TENANTLYMOBILE.png";
import bgSplash from "../Assets/img/colorbg.png";
function Hero() {
  return (
    <Box
      // top="0px"
      height="130vh"
      objectFit="cover"
      backgroundImage={`url(${bgSplash})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
    >
      <Box
        textAlign={["center"]}
        backgroundColor="BgColor.50"
        width="300px"
        mx="auto"
        mt="80px"
        borderRadius={["50px"]}
        border="1px solid #141441"
        mb={8}
      >
        <Text fontSize={["14px"]} p={2}>
          Finding shelter shouldn't be a hassle!
        </Text>
      </Box>
      <Heading
        pb={["24px"]}
        color="TextColor.600"
        textAlign={["center"]}
        fontSize="5xl"
        fontWeight={["medium", "medium", "semibold"]}
      >
        Monthly Rentals Made Simple<br></br>{" "}
        <Text as="span" color="TextColor.300">
          <em>-No Middlemen</em>
        </Text>
      </Heading>
      <Text textAlign={["center"]} fontSize="18px" color="TextColor.400">
        Rent an apartment, share, or rent a space you own <br></br> and make
        extra cash at ease.
      </Text>
      <Box textAlign={["center"]} my={8}>
        <Input
          placeholder="Enter your email"
          focusBorderColor="bgColor.100"
          width={["400px"]}
          p={8}
          mr={["10px"]}
          backgroundColor="NeutralColor.0"
        ></Input>
        <Button backgroundColor="PrimaryColor.500" color="NeutralColor.0" p={8}>
          Join Waitlist
        </Button>
      </Box>

      <Flex justifyContent="center" alignItem="center" mt="72px">
        <img src={TenantlyMobile} alt="TenantlyMobile" width={["900px"]} />
      </Flex>
    </Box>
  );
}

export default Hero;
