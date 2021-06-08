import { useState } from 'react';
import { Input, Flex, Button } from '@chakra-ui/react';

export default function PmChat() {
    const [formValue, setFormValue] = useState('');

    return (
        <Flex mt={10} direction="column" justifyContent="space-between" marginTop="20px">
            <form style={{ display: "flex" }}>
                <Input
                    variant="filled"
                    placeholder="say something nice"
                    style={{ marginRight: "10px" }}
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <Button type="submit" disabled={!formValue}>🕊️</Button>
            </form>
        </Flex>
    )
}

