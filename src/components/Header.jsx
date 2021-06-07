import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

export default function Header() {
    return (
        <Flex direction="row" justifyContent="space-between">
            <Text fontWeight="semibold" fontSize="2xl">FireChat🔥</Text>
            <Button>Login</Button>
        </Flex>
    )
}
