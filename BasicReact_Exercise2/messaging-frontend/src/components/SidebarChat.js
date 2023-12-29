import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

const SidebarChat = ({ messages }) => {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src='https://res.cloudinary.com/dix4vcfxa/image/upload/v1703861947/ecommerce-api/xz4yoc0n2iezc9cpovfh.jpg' />
            <div className="sidebarChat__info">
                <h2>Dạ Thành Đạt</h2>
                {Array.isArray(messages) && messages.length > 0 ? (
                    <p>{messages[messages.length - 1]?.message}</p>
                ) : (
                    <p>1 New Message</p>
                )}
            </div>
        </div>
    )
}
export default SidebarChat;
