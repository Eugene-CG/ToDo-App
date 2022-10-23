// const createNoteObject = () => {
//   const editNoteForm = document.querySelector(".edit-note__form");
//   return {
//     name: editNoteForm["edit-note__note-name"].value,
//     category: null,
//     content: editNoteForm["edit-note__note-content"].value,
//     lastEdit: getCurrentDate(),
//   };
// };
const createNoteObject = ({ noteName, noteContent }, currentDate) => {
  return {
    name: noteName,
    category: null,
    content: noteContent,
    lastEdit: currentDate,
  };
};
export { createNoteObject };
