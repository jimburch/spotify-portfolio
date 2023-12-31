import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Text, Image, Heading, Code } from "@chakra-ui/react";

const Heading1 = ({ children }: any) => (
  <Heading size="xl" as="h1">
    {children}
  </Heading>
);

const Heading2 = ({ children }: any) => (
  <Heading size="lg" as="h2">
    {children}
  </Heading>
);

const Heading3 = ({ children }: any) => (
  <Heading size="md" as="h3">
    {children}
  </Heading>
);

const Paragraph = ({ children }: any) => <Text>{children}</Text>;

const Bold = ({ children }: any) => (
  <Text as="strong" fontWeight="bold">
    {children}
  </Text>
);

const Italics = ({ children }: any) => (
  <Text as="em" fontStyle="italic">
    {children}
  </Text>
);

const CodeText = ({ children }: any) => <Code>{children}</Code>;

const EmbeddedAsset = ({ node }: any) => {
  const { file, title } = node.data.target.fields;
  const imageUrl = file.url;

  return <Image src={imageUrl} alt={title} />;
};

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text: any) => <Italics>{text}</Italics>,
    [MARKS.CODE]: (text: any) => <CodeText>{text}</CodeText>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <Heading1>{children}</Heading1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <Heading2>{children}</Heading2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <Heading3>{children}</Heading3>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <Paragraph>{children}</Paragraph>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => <EmbeddedAsset node={node} />,
  },
};
