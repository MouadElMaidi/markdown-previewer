import "./App.css";
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import React from "react"
import { marked } from 'marked'
import {defaultText} from "./default-text"


function App() {
  const [editorText, setEditorText] = React.useState(defaultText);
  //console.log(marked.parse('# Marked in the browser\n\nRendered by **marked**.'));
  function handleClick(event) {
    setEditorText(event.target.value);
  }
console.log(defaultText)
  return (
    <div className="app">
      <Editor handleClick={handleClick} value={editorText} />
      <Previewer previewText={marked(editorText)} />
    </div>
  );
}

export default App;