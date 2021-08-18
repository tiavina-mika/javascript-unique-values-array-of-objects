import { useEffect, useState } from "react";
import "./styles.css";

const originalArray = [
  { file: { name: "a" } },
  { file: { name: "b" } },
  { file: { name: "b" } },
  { file: { name: "b" } },
  { file: { name: "c" } }
];

const App = () => {
  const [uniques, setUniques] = useState([]);
  const run = () => {
    const data = [
      ...new Map(originalArray.map((item) => [item.file.name, item])).values()
    ];

    setUniques([...data]);
  };

  return (
    <div className="App">
      <h1>Get unique values from an array of objects in JavaScript</h1>
      <div className="box">
        <h3>Original Array</h3>
        <div className="code">
          <code>{JSON.stringify(originalArray)}</code>
        </div>
      </div>
      <button onClick={run} type="button">
        Run
      </button>
      <div className="box">
        <h3>Result :</h3>
        {uniques.length > 0 && (
          <div className="code">
            <code>{JSON.stringify(uniques)}</code>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
