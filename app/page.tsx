import { Carousel, SlimCard } from "@/components";
import { GAP, scrollbarStyles } from "@/constants";
import { Center, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        flex="3 1 75%"
        direction="column"
        minW="600px"
        minH="full"
        p={GAP}
        gap={GAP}
        borderRadius="md"
        bg="brand.gray.dark"
        overflowY="auto"
        sx={scrollbarStyles}
      >
        <Flex direction="column" w="100%" maxW={1500} p={GAP} gap={4}>
          <Center w="100%" minH={275} bg="brand.green" borderRadius="md">
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
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 2",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 3",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              // {
              //   title: "Card 4",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 5",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 6",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
            ]}
          />
          <Carousel
            title="My Stuff"
            cards={[
              {
                title: "Card 1",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 2",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 3",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              // {
              //   title: "Card 4",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 5",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
              // {
              //   title: "Card 6",
              //   description: "This is a description",
              //   image: "https://via.placeholder.com/300x300",
              //   alt: "placeholder",
              //   link: "#",
              // },
            ]}
          />
        </Flex>
        <Divider />
        <Flex w="full" minH={100}>
          Footer
        </Flex>
      </Flex>
    </>
  );
}
