import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter App</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default App;
