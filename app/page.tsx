import { Carousel, Hero, SlimGrid } from "@/components";
import { GAP, scrollbar } from "@/constants";
import { timeOfDay } from "@/helpers/time";
import { Center, Divider, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        flex="3 1 75%"
        direction="column"
        minW={{ base: "none", lg: 600 }}
        minH="full"
        p={{ base: 0, lg: GAP }}
        gap={GAP}
        borderRadius={{ base: "none", lg: "md" }}
        bg="brand.gray.dark"
        overflowY="auto"
        sx={scrollbar}
      >
        <Flex
          direction="column"
          w="full"
          maxW={1500}
          p={{ base: 0, lg: GAP }}
          gap={4}
        >
          <Hero />
          <Heading mx={{ base: 4, lg: 0 }}>{`Good ${timeOfDay()}`}</Heading>
          <SlimGrid />
          <Carousel title="Experience" entryId="3keK3EDY9zJEEe9xC6oMLm" />
          <Carousel title="Projects" entryId="7ec6zbm4U8fPusdTSCmOML" />
        </Flex>
        <Divider />
        <Flex w="full" minH={100}>
          Footer
        </Flex>
      </Flex>
    </>
  );
}
