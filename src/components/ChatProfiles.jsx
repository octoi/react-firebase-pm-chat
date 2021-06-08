import React from 'react';
import { Flex, Avatar, Text, Divider } from '@chakra-ui/react';
import { firestore, auth } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatProfiles({ setCurrentChat }) {
    const usersRef = firestore.collection('users');
    const query = usersRef.orderBy('name').limit(10);
    const [users] = useCollectionData(query, { idField: 'id' });

    return (
        <div style={{ marginTop: "50px" }}>
            {users && users.map(user => <ChatProfileCard onClick={() => setCurrentChat(user.id)} user={user} key={user?.id} />)}
        </div>
    )
}


function ChatProfileCard({ user, onClick }) {

    const currentUser = {
        name: auth?.currentUser.displayName,
        email: auth?.currentUser.email,
        profile: auth?.currentUser.photoURL,
    }

    if (currentUser.email === user?.email) return null;

    return (
        <div>
            <Flex onClick={onClick} cursor="pointer" alignItems="center" mb={5} mt={5}>
                <Avatar src={user.profile} size="lg" />
                <Flex direction="column" ml={3}>
                    <Text fontSize="lg" fontWeight="semibold">{user.name}</Text>
                    <Text fontSize="md">{user.email}</Text>
                </Flex>
            </Flex>
            <Divider />
        </div>
    );

}