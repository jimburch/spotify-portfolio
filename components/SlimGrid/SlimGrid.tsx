import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { SlimCard } from "..";
import { GAP } from "@/constants";
import { Suspense } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function SlimGrid() {
  const data = getData();

  const SlimGridSkeleton = () => (
    <SimpleGrid
      columns={{ lg: 3, md: 2 }}
      spacing={GAP}
      mx={{ base: 4, lg: 0 }}
    >
      <Skeleton height={65} borderRadius="md" />
      <Skeleton height={65} borderRadius="md" />
      <Skeleton height={65} borderRadius="md" />
    </SimpleGrid>
  );

  return (
    <Suspense fallback={<SlimGridSkeleton />}>
      <SimpleGrid
        columns={{ lg: 3, md: 2 }}
        spacing={GAP}
        mx={{ base: 4, lg: 0 }}
      >
        <Skeleton height={65} borderRadius="md" />
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
    </Suspense>
  );
}
