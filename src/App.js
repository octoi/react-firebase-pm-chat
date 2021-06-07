import React from 'react';
import ChakraWrap from './wrappers/ChakraWrap';
import Header from './components/Header';
import Chat from './components/Chat';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { Container } from '@chakra-ui/react';

function App() {

    const [user, loading, error] = useAuthState(auth);

    if (error) {
        console.log(error);
        alert("Oops something went wrong !");
    }

    return (
        <ChakraWrap>
            <Container maxW="container.xl" mt={10}>
                <Header user={user} />
                {user ? <Chat /> : <Login loading={loading} />}
            </Container>
        </ChakraWrap>
    );
}

export default App;