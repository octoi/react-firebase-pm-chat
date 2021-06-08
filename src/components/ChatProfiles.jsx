import React from 'react';
import { Flex, Avatar, Text, Divider } from '@chakra-ui/react';
import { firestore } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatProfiles({ setCurrentChat }) {
    const usersRef = firestore.collection('users');
    const query = usersRef.limit(25);
    const [users] = useCollectionData(query, { idField: 'id' });

    return (
        <div style={{ marginTop: "50px" }}>
            {users && users.map(user => <ChatProfileCard user={user} key={user?.id} />)}
        </div>
    )
}


function ChatProfileCard({ user }) {
    return (
        <div>
            <Flex cursor="pointer" alignItems="center" mb={5} mt={5}>
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