import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    notes: [{ id: 1, title: "Note 1", content: "This is the first note." }]
}

export const notesSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content
            }
            state.notes.push(note)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id)
        },
        updateNote: (state, action) => {
            const { id, title, content } = action.payload
            const note = state.notes.find(note => note.id === id)
            if (note) {
                note.title = title
                note.content = content
            }
        }
    }
})

export const { addNote, deleteNote, updateNote } = notesSlice.actions

export default notesSlice.reducer 