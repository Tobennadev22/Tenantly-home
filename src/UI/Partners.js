import { Box, Flex, Container, Heading } from "@chakra-ui/react";
import Sterling from "../Assets/img/sterling.jpg";

function Partners() {
  return (
    <Container maxW={["container.lg"]}>
      <Heading
        fontSize={["24px"]}
        fontWeight={[500]}
        textAlign={["center"]}
        color="TextColor.400"
      >
        In Partnership with
      </Heading>
      <Flex gap={10} alignItems={["center"]} justifyContent={["center"]}>
        <Box>
          <img src={Sterling} alt="sterlingIcon" width={["200px"]} />
        </Box>
        <Box>
          {" "}
          <img src={Sterling} alt="sterlingIcon" width={["200px"]} />
        </Box>
        <Box>
          {" "}
          <img src={Sterling} alt="sterlingIcon" width={["200px"]} />
        </Box>
      </Flex>
    </Container>
  );
}

export default Partners;
