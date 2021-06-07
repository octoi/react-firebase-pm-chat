import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { auth } from '../firebase/firebase';

export default function Header({ user }) {

    const signOut = () => {
        auth.signOut();
    }

    return (
        <Flex direction="row" justifyContent="space-between">
            <Text fontSize="2xl">FireChat🔥</Text>
            <Button onClick={signOut} disabled={!user}>{user ? 'Signout' : 'Login'}</Button>
        </Flex>
    )
}
