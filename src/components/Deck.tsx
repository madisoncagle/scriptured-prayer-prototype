import { Card, Text, Heading, Badge, Flex } from '@radix-ui/themes'

interface DeckProps {
    title: string,
    description: string,
    coverImage: string,
    numCards: number
}

const Deck = ({ title, description, coverImage, numCards }: DeckProps) => {
    return (
        <Card size="2" style={{ maxWidth: 300, minHeight: 350 }} className={`m-4 bg-[url(${coverImage})] text-white`}>
            {/* <Inset clip="padding-box" side="top" pb="current">
                <img
                    // src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    // src="./images/sunset-tree.jpg"
                    src={coverImage}
                    alt="Bold typography"
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                    }}
                />
            </Inset> */}

            <Flex justify={'between'}>
                <Heading as="h1" size="5">{title}</Heading>
                <Badge color="blue" radius='large'>{numCards} cards</Badge>
            </Flex>

            <Text as="p" size="3">
                {/* <Strong>Typography</Strong> is the art and technique of arranging type to
                make written language legible, readable and appealing when displayed. */}
                {description}
            </Text>
        </Card>
    )
}

export default Deck