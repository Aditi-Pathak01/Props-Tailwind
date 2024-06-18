import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Cards";

function App() {

  return (
    <>
      <div>
        <h1 className="bg-green-600 mb-5 rounded text-center p-2 text-gray-700">
          Tailwind & Props!
        </h1>
        <div className="flex gap-6">
          <Cards name="Aditi" desc="I am a Dr" btnTxt="Visit Me"/>
          <Cards name="Sanjana" desc="I am a Developer" btnTxt="Click Me"/>
          <Cards name="Nistha" desc="I am a Student" />
        </div>
      </div>
    </>
  );
}

export default App;
