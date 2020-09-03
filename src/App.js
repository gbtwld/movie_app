import React from "react";

function Food({ fav, sec }) {
    return (
        <h3>
            I love {fav} and {sec}!!!!
        </h3>
    );
}

function Friends({ name, age, firstMet }) {
    return (
        <h2>
            {name} is {age} years old. {firstMet}.
        </h2>
    );
}

const foodILike = [
    {
        name: "Pizza",
        beb: "Coke",
    },
    {
        name: "Hamburger",
        beb: "Soda",
    },
    {
        name: "Chicken",
        beb: "Beer",
    },
];

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

function renderFood(menu) {
    return <Food fav={menu.name} sec={menu.beb} />;
}

function renderFriends(friend) {
    return <Friends name={friend.name} age={friend.age} firstMet={friend.firstMet} />;
}

function App() {
    return (
        <div className="App">
            {foodILike.map(renderFood)}
            {friendsList.map(renderFriends)}
        </div>
    );
}

export default App;
