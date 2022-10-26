import React from "react";
import LinkButton from "./component/LinkButton";
import TextBanner from "./component/TextBanner";
import Pic from "./component/pic";
import Picture from "./IMG_0036.JPG"
import './App.css';

function App() {
  return (
    <div  style={{ textAlign: "center"}}>
         <Pic
          picture={Picture}
         />

         <TextBanner
         title="@ShanelChii"
         />

      <LinkButton
      name= "Zuri"
      link="https://training.zuri.team/"
      id="btn__zuri"
      />

<LinkButton
      name= "Zuri books"
      link="http://books.zuri.team"
      title="Zuri Books"
      text="This is where you will find books about design and coding"
      id="books"
      />

<LinkButton
      name= "python for beginners"
      link="https://books.zuri.team"
      text="learn Python from scratch."
      id="book__python"
      ref_id="chiSharon"
      />

<LinkButton
      name= "Zuri coders"
      link="https://background.zuri.team"
      text="Zuri train and connect people from around the world to compaines that are hiring."
      id="pitch"
      />

<LinkButton
      name= "Zuri free design book"
      link="https://training.zuri.team/"
      text="Zuri offers highly free tech design book"
      id="book__design"
      />
    </div>
  );

}


export default App;
