import React from 'react'
import { auth, provider } from '../firebase/firebase';
import { Button, Center, Spinner } from '@chakra-ui/react';

export default function Login({ loading }) {
    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <Center h="80vh">
                <Button onClick={signInWithGoogle} size="lg" style={{ fontSize: "20px", padding: "30px 40px" }} disabled={loading}>
                    {loading ? <Spinner /> : 'Login With Google'}
                </Button>
            </Center>
        </div>
    )
}