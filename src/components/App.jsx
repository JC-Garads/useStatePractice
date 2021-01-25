import React, { useState } from "react";

function App() {
  setInterval(showTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [press, setPress] = useState(time);
  console.log(time);

  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setPress(newTime);
  }

  return (
    <div className="container">
      <h1>{press}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
