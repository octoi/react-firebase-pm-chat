import { useState, useEffect, useRef } from 'react';
import { auth, firestore } from '../firebase/firebase';
import { Input, Flex, Button } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

export default function PmChat({ currentChat }) {
    const messageRef = firestore.collection('chats');
    const [chatRoom, setChatRoom] = useState();
    const dummy = useRef();

    const user = {
        name: auth?.currentUser.displayName,
        email: auth?.currentUser.email,
        profile: auth?.currentUser.photoURL,
    }


    useEffect(() => {
        let users = [user.email, currentChat?.email];
        users.sort();

        const getChatRoom = async () => {
            const query = await messageRef.where('users', '==', users).get();

            if (query.docs.length === 0)
                await messageRef.add({ users, messages: [] })
                    .then(res => res.get()
                        .then(doc => setChatRoom({ ...doc.data(), id: doc.id })));

            query.docs.map(doc => setChatRoom({ ...doc.data(), id: doc.id }));
        }
        getChatRoom();
    }, []);


    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><BreadcrumbLink href="/">Chats</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbItem><BreadcrumbLink href="#">{currentChat.name}</BreadcrumbLink></BreadcrumbItem>
            </Breadcrumb>
            <Flex direction="column" justifyContent="space-between" marginTop="50px">
                <Messages dummy={dummy} messages={chatRoom?.messages} user={user} />
                <ChatForm />
            </Flex>
        </div>
    )
}

const ChatForm = () => {
    const [formValue, setFormValue] = useState('');

    return (
        <form style={{ display: "flex", marginBottom: "20px" }}>
            <Input
                variant="filled"
                placeholder="say something nice"
                style={{ marginRight: "10px" }}
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
            />
            <Button type="submit" disabled={!formValue}>🕊️</Button>
        </form>
    );
}

function Messages({ messages, user, dummy }) {
    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages, dummy])

    return (
        <div style={{ height: "75vh", overflowX: "hidden", margin: "20px 0px" }}>
            {messages && messages.map((message, id) => <ChatMessage user={user} chat={message} key={id} />)}
            <span ref={dummy}></span>
        </div>
    );
}

function ChatMessage({ chat, user }) {

    const isMyMessage = user.email === chat.user.email

    return (
        <Flex alignItems="center" flexDirection={isMyMessage ? "row-reverse" : "row"} marginTop="15px">
            <div style={{
                margin: "0px 10px",
                background: isMyMessage ? '#3bbdb6' : "var(--chakra-colors-whiteAlpha-200)",
                padding: "15px 10px",
                borderRadius: "10px",
                textAlign: "right",
                width: "fit-content"
            }}>
                {chat.message}
            </div>
        </Flex>
    );
}