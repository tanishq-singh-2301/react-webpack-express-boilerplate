import React from 'react';
const io = require("socket.io-client");

const Home = () => {
    const socket = io();

    window.onload = () => {
        socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);
    };

    return (
        <>
            <h1>Welcome Home</h1>
            <h1 id='current-users'></h1>
        </>
    )
};

export default Home;