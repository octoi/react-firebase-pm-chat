import React from 'react';
import ChakraWrap from './wrappers/ChakraWrap';
import Header from './components/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { Container } from '@chakra-ui/react';

function App() {

    const [user, loading, error] = useAuthState(auth);

    return (
        <ChakraWrap>
            <Container maxW="container.xl" mt={10}>
                <Header user={user} />
            </Container>
        </ChakraWrap>
    );
}

export default App;