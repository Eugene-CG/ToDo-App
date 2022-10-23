const getFormData = () => {
  const editNoteForm = document.querySelector(".edit-note__form");
  return {
    noteName: editNoteForm["edit-note__note-name"].value,
    noteContent: editNoteForm["edit-note__note-content"].value,
  };
};
export { getFormData };
