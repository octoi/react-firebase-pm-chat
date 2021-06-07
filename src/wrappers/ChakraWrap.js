import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export default function ChakraWrap({ children }) {
    const theme = extendTheme({
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false
        }
    });

    return (
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    )
}
