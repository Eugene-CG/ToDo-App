const appWrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");
let editCreatedNote = false;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let notes = [];
const allNotesHtml = document.querySelectorAll(".note");
appWrapper.addEventListener("click", ({ target }) => {
  if (target.closest(".add-note-btn")) {
    editCreatedNote = false;
    main.innerHTML = noteEditingMode();
  }
  if (target.closest(".note__status-check")) {
    target.closest(".note").classList.toggle("note_finished");
    return;
  }
  if (target.closest(".note__status-deleted")) {
    console.log(notes.length);
    const noteElement = target.closest(".note");
    const indexToDelete = notes.findIndex(
      (note) => note.name === noteElement.dataset.noteName
    );
    notes.splice(indexToDelete, 1);
    console.log(notes.length);
    noteElement.remove();
    return;
  }
  if (target.closest(".edit-note__btn-back")) {
    // main.innerHTML = returnBackToNotes();
    // main.innerHTML = "";
    const editNote = document.querySelector(".edit-note");
    editNote.classList.add("hide");
    main.innerHTML = `
          <div class="notes-container">
          </div>
          <button class="add-note-btn main__add-note-btn"></button>`;
    renderNotes();
  }
  if (target.closest(".edit-note__btn-save")) {
    // notes.push(addNewNote());
    const editNoteForm = document.querySelector(".edit-note__form");
    const createdNoteIndex = notes.findIndex(
      (note) => note.name === editNoteForm["edit-note__note-name"].value
    );
    const newNoteObject = createNoteObject();
    if (!createdNoteIndex || editCreatedNote) {
      notes.splice(createdNoteIndex, 1, newNoteObject);
    } else {
      editCreatedNote = false;
      console.log(createdNoteIndex);
      notes.push(newNoteObject);
    }
    // const newNoteHtml = createNoteHtml(newNoteObject);
  }
  if (target.closest(".note")) {
    // target.closest(".note").dataset.noteName;
    editCreatedNote = true;
    const noteTitleName = target.closest(".note").dataset.noteName;
    const s = notes.find((note, index) => note.name === noteTitleName);
    console.log(s);

    main.innerHTML = createdNoteEditingMode(s);
  }
});
window.addEventListener("DOMContentLoaded", () => {
  renderNotes();
});
//
const noteEditingMode = () => {
  return `
    <article class="edit-note">
            <div class="edit-note__options">
              <button class="edit-note__btn-back"></button>
              <div class="edit-note__btns-save-undo">
                <button class="edit-note__btn-save">Save</button>
                <button class="edit-note__btn-undo">Undo</button>
              </div>
            </div>
            <form
              action="#"
              class="edit-note__form"
            >
              <input
                type="text"
                name="edit-note__note-name"
                class="edit-note__note-name"
              />
              <textarea
                name="edit-note__note-content"
                class="edit-note__note-content"
                id=""
                cols="30"
                rows="20"
              ></textarea>
            </form>
          </article>`;
};
const createdNoteEditingMode = ({ name, content }) => {
  return `
    <article class="edit-note">
            <div class="edit-note__options">
              <button class="edit-note__btn-back"></button>
              <div class="edit-note__btns-save-undo">
                <button class="edit-note__btn-save">Save</button>
                <button class="edit-note__btn-undo">Undo</button>
              </div>
            </div>
            <form
              action="#"
              class="edit-note__form"
            >
              <input
                type="text"
                name="edit-note__note-name"
                class="edit-note__note-name"
                value="${name}"
              />
              <textarea
                name="edit-note__note-content"
                class="edit-note__note-content"
                id=""
                cols="30"
                rows="20"
              >${content}</textarea>
            </form>
          </article>`;
};
const returnBackToNotes = () => {};

const createNoteObject = () => {
  const editNoteForm = document.querySelector(".edit-note__form");
  return {
    name: editNoteForm["edit-note__note-name"].value,
    category: null,
    content: editNoteForm["edit-note__note-content"].value,
    lastEdit: getCurrentDate(),
  };
};

const getCurrentDate = () => {
  const dateNow = new Date();
  const editTime = `${dateNow.getUTCDate()} \
${monthNames[dateNow.getMonth()]}, \
${dateNow.getHours()}:\
${dateNow.getMinutes()}:\
${dateNow.getSeconds()}`;
  return editTime;
};

// const createNoteHtml = ({ name, category, content, lastEdit }) => {
//   return `
//     <article class="note main__note">
//             <h2 class="note__name">${name}</h2>
//             <p class="last-edit note__last-edit">
//               <span class="last-edit__span">Last edit:</span>
//               <time class="last-edit__time">${lastEdit}</time>
//             </p>
//           </article>
//           `;
// };
//
const renderNotes = () => {
  const notesContainer = document.querySelector(".notes-container");
  const notesHtml = notes.map((note) => {
    return `
    <article class="note main__note" data-note-name="${note.name}">
            <h2 class="note__name">${note.name}</h2>
            <div class="note__status-btns">
                <button class="note__status-check"></button>
                <button class="note__status-deleted"></button>
              </div>
            <p class="last-edit note__last-edit">
              <span class="last-edit__span">Last edit:</span>
              <time class="last-edit__time">${note.lastEdit}</time>
            </p>
          </article>
          `;
  });
  notesContainer.innerHTML = notesHtml.join("");
};
