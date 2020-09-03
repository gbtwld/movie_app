import React from "react";

const friendsList = [
    {
        name: "Lee",
        age: 22,
        firstMet: 7,
    },
    {
        name: "Kang",
        age: 21,
        firstMet: 8,
    },
    {
        name: "Kim",
        age: 22,
        firstMet: 8,
    },
    {
        name: "Jeon",
        age: 20,
        firstMet: 1,
    },
    {
        name: "Choi",
        age: 22,
        firstMet: 1,
    },
];

function Friends() {
    return <div class="firends">friendsList.map()</div>;
}

export default Friends;
