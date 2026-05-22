import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/notesSlice";

function AddNote() {

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "" || content.trim() === "") {
            alert("Please fill in both the title and content fields.");
            return;
        } else {
            dispatch(addNote({ title, content }));
            setTitle("");
            setContent("");
        }
    }



  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900 text-white rounded-2xl shadow-xl p-6 mt-10 border border-zinc-800">
      
      <h2 className="text-3xl font-bold mb-6 text-center">
        Add a New Note
      </h2>

      <form className="flex flex-col gap-5">
        
        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">
            Note Title
          </label>

          <input
            type="text"
            placeholder="Enter note title..."
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">
            Note Content
          </label>

          <textarea
            rows="6"
            placeholder="Write your thoughts..."
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none resize-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-2">

          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold"
            onClick={handleSubmit}
          >
            Add Note
          </button>

        </div>

      </form>
    </div>
  );
}

export default AddNote;