import { Carousel, SlimCard } from "@/components";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const GAP = 2;

export default function Home() {
  return (
    <Flex as="main" w="100%" h="100vh" gap={GAP} p={GAP}>
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
        >
          Other Stuff
        </Box>
      </Flex>
      <Flex
        flex="3 1 75%"
        direction="column"
        minW="600px"
        h="100%"
        p={GAP}
        gap={GAP}
        borderRadius="md"
        bg="brand.gray.dark"
      >
        <Flex direction="column" w="100%" maxW={1500} h="100%" p={GAP} gap={4}>
          <Center w="100%" h={275} bg="brand.green">
            Welcome image
          </Center>
          <Heading>Good afternoon</Heading>
          <SimpleGrid columns={{ lg: 3, md: 2 }} spacing={GAP}>
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
            <SlimCard
              image="https://via.placeholder.com/300x300"
              alt="placeholder"
              title="Slim Card"
              link="#"
            />
          </SimpleGrid>
          <Carousel
            title="My Stuff"
            cards={[
              {
                title: "Card 1",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 2",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 3",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              // {
              //   title: "Card 4",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 5",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 6",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
            ]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
