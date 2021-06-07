import { Container } from '@chakra-ui/react';
import React from 'react';
import ChakraWrap from './wrappers/ChakraWrap';
import Header from './components/Header';

function App() {
    return (
        <ChakraWrap>
            <Container maxW="container.xl" mt={10}>
                <Header />
            </Container>
        </ChakraWrap>
    );
}

export default App;