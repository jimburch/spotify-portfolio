import { GAP, scrollbarStyles } from "@/constants";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      as="nav"
      flex="1 1 25%"
      direction="column"
      minW="300px"
      maxW="400px"
      h="100%"
      gap={GAP}
    >
      <Box w="100%" bg="brand.gray.dark" borderRadius="md" p={GAP}>
        <VStack spacing={GAP} alignItems="start">
          <Heading>Home</Heading>
          <Heading>Github</Heading>
          <Heading>LinkedIn</Heading>
        </VStack>
      </Box>
      <Box
        w="100%"
        height="100%"
        bg="brand.gray.dark"
        borderRadius="md"
        p={GAP}
        overflowY="auto"
        sx={scrollbarStyles}
      >
        Other Stuff
      </Box>
    </Flex>
  );
}
