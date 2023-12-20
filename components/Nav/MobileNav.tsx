import { GAP, hiddenScrollbar } from "@/constants";
import { Avatar, Button, Flex } from "@chakra-ui/react";

const MIN = 100;

export default function MobileNav() {
  return (
    <Flex
      bg="brand.gray.dark"
      p={4}
      pb={0}
      gap={GAP}
      display={{ base: "flex", lg: "none" }}
    >
      <Avatar size="md" />
      <Flex align="center" gap={GAP} overflowX="auto" sx={hiddenScrollbar}>
        <Button minW={MIN}>Home</Button>
        <Button variant="secondary" minW={MIN}>
          Github
        </Button>
        <Button variant="secondary" minW={MIN}>
          LinkedIn
        </Button>
        <Button variant="secondary" minW={MIN}>
          Other
        </Button>
      </Flex>
    </Flex>
  );
}
