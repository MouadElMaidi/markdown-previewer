import "./App.css";
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import React from "react"
import { marked } from 'marked'



function App() {
  const [editorText, setEditorText] = React.useState("");
  //console.log(marked.parse('# Marked in the browser\n\nRendered by **marked**.'));
  function handleClick(event) {
    setEditorText(event.target.value);
  }

  let markedToStr = marked(editorText);

  return (
    <div className="app">
      <Editor handleClick={handleClick} value={editorText} />
      <Previewer previewText={marked(editorText)} />
    </div>
  );
}

export default App;