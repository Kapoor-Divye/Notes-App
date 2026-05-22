import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, updateNote, addNote } from "../features/notes/notesSlice";

function Notes() {

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      storedNotes.forEach(note => {
        dispatch(addNote(note));
      });
    }
  },[dispatch]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes.notes));
  }, [notes]);
  

  const handleDelete = (id) => {
    dispatch(deleteNote({ id }));
  }

  const handleUpdate = (id) => {
    const newTitle = prompt("Enter the new title:");
    const newContent = prompt("Enter the new content:");
    if (newTitle !== null && newContent !== null) {
      dispatch(updateNote({ id, title: newTitle, content: newContent }));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Your Notes
      </h2>

      <div className="grid gap-6">

        {/* Single Note Card */}
        {notes.notes.map((note) => (
          <div key={note.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg">

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {note.title}
            </h3>

            {/* Content */}
            <p className="text-zinc-300 leading-relaxed mb-6">
              {note.content}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">

              <button
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition-all text-white font-medium"
                onClick={() => handleDelete(note.id)}
              >
                Remove
              </button>

              <button
                className="px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 transition-all text-black font-medium"
                onClick={() => handleUpdate(note.id)}
              >
                Update
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Notes;