import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import checkTenatly from "../Assets/img/checktenantly.jpg";

function Whytenantly() {
  return (
    <Box bg=" #122231">
      <Flex
        direction={["column", "row", "row"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        gap={["80px"]}
        width={["100%", "100%", "1000px"]}
        mx="auto"
      >
        <Box>
          <img
            src={checkTenatly}
            alt="checktenantly"
            width={["200px", "100%", "1200px"]}
          />
        </Box>
        <Box color=" #ffffff">
          <Heading
            pb={["24px", "40px", "54px"]}
            color=" #ffffff"
            // color="TextColor.600"
            // textAlign="center"
            fontSize={["18px", "24px", "24px"]}
            fontWeight="semibold"
          >
            Why we care about<br></br> your housing issues?
          </Heading>
          <Text>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Whytenantly;
