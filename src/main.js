import { findNote } from "./components/_findNote.js";
import { editNoteMode } from "./components/_editNoteMode.js";
import { getCurrentDate } from "./components/_getCurrentDate.js";
import { addNoteBtn } from "./components/_add-note-btn.js";
import { getFormData } from "./components/_getFormData.js";
import { createNoteObject } from "./components/_createNoteObject.js";
import { renderNotes } from "./components/_renderNotes.js";
import { filterNotesByName } from "./components/headerForm/_filterNotesByName.js";
import { sortNotesByName } from "./components/headerForm/_sortNotesByName.js";
import { sortNotesByDate } from "./components/headerForm/_sortNotesByDate.js";

let notes = [];
const appWrapper = document.querySelector(".wrapper");
const headerForm = document.querySelector(".form");
const main = document.querySelector(".main");
const sortList = document.querySelector(".sort-list");
let editCreatedNote = false;
appWrapper.addEventListener("click", ({ target }) => {
  if (target.closest(".add-note-btn")) {
    editCreatedNote = false;
    main.innerHTML = editNoteMode({});
  }
  if (target.closest(".note__status-check")) {
    findNote(target).classList.toggle("note_finished");
    return;
  }
  if (target.closest(".note__status-deleted")) {
    const noteElement = findNote(target);
    const indexToDelete = notes.findIndex(
      (note) => note.name === noteElement.dataset.noteName
    );
    notes.splice(indexToDelete, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteElement.remove();
    return;
  }
  if (target.closest(".edit-note__btn-back")) {
    const editNote = document.querySelector(".edit-note");
    editNote.classList.add("hide");
    main.innerHTML = addNoteBtn();
    renderNotes(notes);
  }
  if (target.closest(".edit-note__btn-save")) {
    const formData = getFormData();
    console.log(notes);
    const createdNoteIndex = notes.findIndex(
      (note) => note.name === formData.noteName
    );
    const newNoteObject = createNoteObject(formData, getCurrentDate());
    if (!createdNoteIndex || editCreatedNote) {
      notes.splice(createdNoteIndex, 1, newNoteObject);
    } else {
      editCreatedNote = false;
      notes.push(newNoteObject);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  if (target.closest(".note")) {
    editCreatedNote = true;
    const noteTitleName = findNote(target).dataset.noteName;
    const noteObject = notes.find((note, index) => note.name === noteTitleName);
    main.innerHTML = editNoteMode(noteObject);
  }
  if (target.closest(".sort-btn_list-handler")) {
    sortList.classList.toggle("sort-list_open");
    main.classList.toggle("exclude-pointer-events");
  }
  if (target.closest(".sort-list__item")) {
    let notesCopy = [...notes];
    if (target.innerText === "Name") {
      sortNotesByName(notesCopy);
    }
    if (target.innerText === "Date") {
      notesCopy = sortNotesByDate(notesCopy);
    }
    renderNotes(notesCopy);
  }
});
headerForm.addEventListener("input", ({ target }) => {
  if (target.closest(".search-line")) {
    const filteredByNameNotes = filterNotesByName(
      headerForm["search-line"].value,
      notes
    );
    renderNotes(filteredByNameNotes);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
  renderNotes(notes);
});
