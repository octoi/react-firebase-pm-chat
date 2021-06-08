import { useState } from 'react';
import ChatProfiles from './ChatProfiles';
import PmChat from './PmChat';

export default function Chat() {
    const [currentChat, setCurrentChat] = useState();

    return currentChat ? <PmChat /> : <ChatProfiles />
}