import React, { useState } from "react";


export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase Counter</button>
      {count}
    </div>
  );
};
