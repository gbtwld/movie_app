import React from "react";

function Food({ fav, sec }) {
  return (
    <h3>
      I love {fav} and {sec}!!
    </h3>
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

function renderFood(menu) {
  return <Food fav={menu.name} sec={menu.beb} />;
}

function App() {
  return <div className="App">{foodILike.map(renderFood)}</div>;
}

export default App;
