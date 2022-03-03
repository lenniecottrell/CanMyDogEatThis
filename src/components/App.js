import React, {useState} from 'react';
import '../styles/style.scss';
import InputBox from "./InputBox";
import Results from './Results';
import PupPic from './PupPic';


function App() {
  const [results, setResults] = useState("Results");

  //lists of items
  const acceptableItems = ["blueberries", "lettuce", "carrots"];
  const offLimits = ["grapes", "chocolate", "onion"];


  return (
    <main>
      <h1 className="title doodle">Can My Dog Eat This?</h1>
      <InputBox />
      <Results results={results}/>
      <PupPic />
    </main>
  );
}


export default App;
