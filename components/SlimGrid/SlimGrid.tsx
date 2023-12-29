import { Suspense } from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { SlimCard } from "..";
import { GAP } from "@/constants";
import { fetchContentfulEntry } from "@/utils/contentful";

export default async function SlimGrid() {
  const data = await fetchContentfulEntry("4q4bguomgV7FV9HIo5PSk4");
  const cards = data.fields.slimCards;

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
        {cards.map((card: any, i: number) => (
          <SlimCard
            key={i}
            image={card.fields.image.fields.file.url}
            alt={card.fields.image.fields.title}
            title={card.fields.title}
            link="#"
          />
        ))}
      </SimpleGrid>
    </Suspense>
  );
}

// figure out Suspense with image loading
