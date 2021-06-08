import React from 'react';
import { Flex, Avatar, Text, Divider } from '@chakra-ui/react';

export default function ChatProfiles({ setCurrentChat }) {
    return (
        <div>
            <ChatProfileCard />
        </div>
    )
}


function ChatProfileCard() {
    return (
        <div>
            <Flex cursor="pointer" alignItems="center" mb={5} mt={5}>
                <Avatar src="https://bit.ly/ryan-florence" size="lg" />
                <Flex direction="column" ml={3}>
                    <Text fontSize="lg" fontWeight="semibold">Username</Text>
                    <Text fontSize="md">user@email.com</Text>
                </Flex>
            </Flex>
            <Divider />
        </div>
    );
}