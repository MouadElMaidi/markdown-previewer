import "./App.css";
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import React from "react"
import { marked } from 'marked'
import { defaultText } from "./default-text"


function App() {
  const [editorText, setEditorText] = React.useState(defaultText);

  function handleClick(event) {
    setEditorText(event.target.value);
  }

  marked.setOptions({
    breaks: true
  })

  let markedText = marked(editorText)

  return (
    <div className="app">
      <Editor handleClick={handleClick} value={editorText} />
      <Previewer previewText={markedText} />
    </div>
  );
}

export default App;