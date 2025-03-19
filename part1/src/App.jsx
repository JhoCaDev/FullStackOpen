import { useState } from "react";

const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const newClick = {
      ...click,
      left: click.left + 1,
    };
    setClick(newClick);
  };

  const handleRightClick = () => {
    const newClick = {
      ...click,
      right: click.right + 1,
    };
    setClick(newClick);
  };

  return (
    <div>
      {click.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {click.right}
    </div>
  );
};

export default App;
