import { Flex, Text, Button } from '@radix-ui/themes';
import Deck from './components/Deck';

function App() {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
            <Deck title='Names of God' description='Names of God the Father in the Old and New Testaments' numCards={12} coverImage='./images/sunset-tree.jpg' />
        </Flex>
    );
}

export default App
