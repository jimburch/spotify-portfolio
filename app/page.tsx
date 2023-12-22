import { Carousel, SlimCard } from "@/components";
import { GAP, scrollbar } from "@/constants";
import { Center, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

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
          <Center
            // w="full"
            minH={{ base: 175, lg: 275 }}
            mx={{ base: 4, lg: 0 }}
            bg="brand.green"
            borderRadius="md"
          >
            Welcome image
          </Center>
          <Heading mx={{ base: 4, lg: 0 }}>Good afternoon</Heading>
          <SimpleGrid
            columns={{ lg: 3, md: 2 }}
            spacing={GAP}
            mx={{ base: 4, lg: 0 }}
          >
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
              {
                title: "Card 4",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 5",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
              {
                title: "Card 6",
                description: "This is a description",
                image: "https://via.placeholder.com/300x300",
                alt: "placeholder",
                link: "#",
              },
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
