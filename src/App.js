import Person from "./person";
import { useState } from 'react';
import "./App.css";


function App() {

  const [show, setshow] = useState(true);

const handlesetshow = (e) => {

setshow((prev) => !prev);

}

  return (
    <div className="App">
      <button onClick={handlesetshow}>{show ? "hide" : "show"}</button>
      {show ? 
      <Person
      imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSy2mi2SmXKoTwcWs7N0TYfNRWK5Uv74GV_Us3z1KwbyCMXhoy7"
        fullName="john stewart"
        bio="making people laugh"
        profession="comedian"
      />
      : null}
    </div>
  );
}

export default App;
