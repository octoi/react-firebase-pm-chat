import React from 'react';
import ChakraWrap from './wrappers/ChakraWrap';
import { Container } from '@chakra-ui/react';

function App() {
    return (
        <ChakraWrap>
            <Container maxW="container.xl" mt={10}>
            </Container>
        </ChakraWrap>
    );
}

export default App;