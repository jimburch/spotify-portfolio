import { GAP } from "@/constants";
import { convertDate } from "@/helpers/time";
import { Flex, Image, Text } from "@chakra-ui/react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

export default function BlogCard({ image, title, date, link }: BlogCardProps) {
  return (
    <Flex
      h="80px"
      align="center"
      gap={GAP}
      p={GAP}
      borderRadius="md"
      sx={{
        _hover: { bg: "brand.gray.base" },
        _active: { bg: "brand.gray.soft" },
      }}
    >
      <Image
        src={image}
        alt={title}
        h="full"
        objectFit="cover"
        borderRadius="md"
        aspectRatio={1}
      />
      <Flex direction="column">
        <Text fontWeight="bold">{title}</Text>
        <Text>{convertDate(date)}</Text>
      </Flex>
    </Flex>
  );
}
