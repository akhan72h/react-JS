import React, { useReducer, useState } from "react";

export default function UseReducer() {
  const manageState = (state, { payload, type }) => {
    switch (type) {
      case "ADD":
        let d = [...state];
        d.push(payload);
        return d;
        break;

      default:
        return state;
        break;
    }
  };

  const [data, setData] = useReducer(manageState, []);

  const handelsave = () => {
    setData({ type: "ADD", payload: input });
  };

  console.log(data);
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <input type="button" value="Save" onClick={handelsave} />
    </div>
  );
}