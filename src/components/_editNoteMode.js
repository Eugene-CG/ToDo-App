const editNoteMode = ({ name = "", content = "" }) => {
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
export { editNoteMode };
