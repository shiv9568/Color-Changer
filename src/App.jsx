import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#232323 ");

  return (
    <div style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg   px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-2 rounded-full bg-purple-600 text-white"
            onClick={() => {
              setColor("purple");
            }}
          >
            purple
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full bg-pink-600 text-white"
            onClick={() => {
              setColor("pink");
            }}
          >
            pink
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full bg-orange-600 text-white"
            onClick={() => {
              setColor("orange"); 
            }}
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full bg-green-600 text-white"
            onClick={() => {
              setColor("Green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full bg-blue-600 text-white"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full bg-red-600 text-white"
            onClick={() => {
              setColor("Red");
            }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
