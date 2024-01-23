import { GAP, scrollbar } from "@/constants";
import { Box, Flex, Heading, VStack, Link } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogList } from "..";

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
      <Box w="full" bg="brand.gray.dark" borderRadius="md" p={5}>
        <VStack spacing={5} alignItems="start">
          <Flex as={Link} href="/" align="center" gap={GAP}>
            <FontAwesomeIcon
              fontSize={25}
              height={25}
              width={25}
              icon={faHouse}
            />
            <Heading size="md">Home</Heading>
          </Flex>
          <Flex as={Link} href="https://github.com" align="center" gap={GAP}>
            <FontAwesomeIcon
              fontSize={25}
              height={25}
              width={25}
              icon={faGithub}
            />
            <Heading size="md">GitHub</Heading>
          </Flex>
          <Flex as={Link} href="https://github.com" align="center" gap={GAP}>
            <FontAwesomeIcon
              fontSize={25}
              height={25}
              width={25}
              icon={faLinkedin}
            />
            <Heading size="md">LinkedIn</Heading>
          </Flex>
        </VStack>
      </Box>
      <Box
        w="full"
        height="full"
        bg="brand.gray.dark"
        borderRadius="md"
        p={5}
        overflowY="auto"
        sx={scrollbar}
      >
        <Flex align="center" gap={GAP}>
          <FontAwesomeIcon
            fontSize={25}
            height={25}
            width={25}
            icon={faLayerGroup}
          />
          <Heading size="md">Changeblog</Heading>
        </Flex>
        <BlogList />
      </Box>
    </Flex>
  );
}
