import { GAP, scrollbar } from "@/constants";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      as="nav"
      flex="1 1 25%"
      direction="column"
      minW={300}
      maxW={400}
      h="full"
      gap={GAP}
      display={{ base: "none", lg: "flex" }}
    >
      <Box w="full" bg="brand.gray.dark" borderRadius="md" p={GAP}>
        <VStack spacing={GAP} alignItems="start">
          <Heading>Home</Heading>
          <Heading>Github</Heading>
          <Heading>LinkedIn</Heading>
        </VStack>
      </Box>
      <Box
        w="full"
        height="full"
        bg="brand.gray.dark"
        borderRadius="md"
        p={GAP}
        overflowY="auto"
        sx={scrollbar}
      >
        Other Stuff
      </Box>
    </Flex>
  );
}
