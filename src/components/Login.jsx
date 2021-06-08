import React from 'react'
import { auth, provider, firestore } from '../firebase/firebase';
import { Button, Center, Spinner } from '@chakra-ui/react';

export default function Login({ loading }) {
    const signInWithGoogle = () => {
        const userRef = firestore.collection("users");

        auth.signInWithPopup(provider).then(async userData => {
            const user = {
                name: userData.user.displayName,
                email: userData.user.email,
                profile: userData.user.photoURL,
            }

            const query = await userRef.where('email', '==', user.email).get();
            if (query.docs.length === 0) await userRef.add({ ...user });
        })
    }

    return (
        <div>
            <Center h="80vh">
                <Button onClick={signInWithGoogle} size="lg" p={8} style={{ fontSize: "20px" }} disabled={loading}>
                    {loading ? <Spinner /> : 'Login With Google'}
                </Button>
            </Center>
        </div>
    )
}