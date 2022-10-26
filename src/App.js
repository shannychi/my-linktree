import React from "react";
import LinkButton from "./component/LinkButton";
import './App.css';

function App() {
  return (
    <div>
      <LinkButton
      name= "Zuri"
      link="https://training.zuri.team/"
      />

<LinkButton
      name= "Zuri books"
      link="http://books.zuri.team"
      />

<LinkButton
      name= "python for beginners"
      link="https://books.zuri.team"
      />

<LinkButton
      name= "Zuri coders"
      link="https://background.zuri.team"
      />

<LinkButton
      name= "Zuri free design book"
      link="https://training.zuri.team/"
      />
    </div>
  );

}


export default App;
