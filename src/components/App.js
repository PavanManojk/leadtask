import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Project from "./Project";
import Acheive from "./Acheivements";
import imgnotes from "./imgNotes";
import imagearray from "../imagesArray";
function App() {
  return (
    <div>
      <Project />
      {notes.map(function (n) {
        return <Note title={n.title} content={n.content} />;
      })}
      <Acheive />
      {imagearray.map(function (n) {
        return <Note img={n.ImgUrl} content={n.content} />;
      })}
    </div>
  );
}

export default App;

//{imagearray.map(function (n) {
// return <imgnotes img={n.ImgUrl} content={n.content} />;
//})}
