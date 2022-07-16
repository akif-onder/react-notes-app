import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(
    [{
    id: nanoid(),
    text: "first note",
    date: "16/07/2022",
  },
    {
    id: nanoid(),
    text: "second note",
    date: "16/07/2022",
  },
    {
    id: nanoid(),
    text: "third note",
    date: "16/07/2022",
  },
    {
    id: nanoid(),
    text: "4th note",
    date: "16/07/2022",
  },
]
  );
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
