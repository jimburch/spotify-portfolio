import { fetchContentfulEntries } from "@/utils/contentful";
import { Flex } from "@chakra-ui/react";
import { BlogCard } from "..";

export default async function BlogList() {
  const data = await fetchContentfulEntries("blogPost");
  const posts = data.items;

  return (
    <Flex direction="column" mt={5}>
      {posts.map((post: any, i: number) => (
        <BlogCard
          key={i}
          image={`http:${post.fields.previewImage.fields.file.url}`}
          title={post.fields.title}
          date={post.sys.createdAt}
          link="#"
        />
      ))}
    </Flex>
  );
}
