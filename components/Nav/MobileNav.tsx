import { GAP, hiddenScrollbar } from "@/constants";
import { Avatar, Button, Flex, Link } from "@chakra-ui/react";

const MIN = 100;

export default function MobileNav() {
  return (
    <Flex
      bg="brand.gray.dark"
      gap={GAP}
      display={{ base: "flex", lg: "none" }}
      py={4}
      pl={4}
    >
      <Avatar size="md" />
      <Flex align="center" gap={GAP} overflowX="auto" sx={hiddenScrollbar}>
        <Button as={Link} href="/" minW={MIN}>
          Home
        </Button>
        <Button
          as={Link}
          href="https://github.com/jimburch"
          variant="secondary"
          minW={MIN}
        >
          Github
        </Button>
        <Button
          as={Link}
          href="https://www.linkedin.com/in/jimburch1/"
          variant="secondary"
          minW={MIN}
        >
          LinkedIn
        </Button>
      </Flex>
    </Flex>
  );
}
