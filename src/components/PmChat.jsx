import { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase/firebase';
import { Input, Flex, Button, Avatar } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

export default function PmChat({ currentChat }) {
    const messageRef = firestore.collection('chats');
    const [chatRoom, setChatRoom] = useState();

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

            if (query.docs.length === 0) await messageRef.add({
                users,
                messages: []
            }).then(res => {
                res.get().then(doc => setChatRoom(doc.data()))
            });

            query.docs.map(doc => setChatRoom(doc.data()));
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
                <ChatForm />
            </Flex>
        </div>
    )
}

const ChatForm = () => {
    const [formValue, setFormValue] = useState('');

    return (
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
    );
}

